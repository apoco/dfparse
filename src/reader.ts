type Props = {
  stream: AsyncIterable<Buffer>;
};

export type Reader = ReturnType<typeof reader>;

/** Creates a Reader which incrementally consume an AsyncIterable<Buffer> */
export default function reader({ stream }: Props) {
  let index = 0;
  let buffer = Buffer.from([]);
  const iterator = stream[Symbol.asyncIterator]();
  let eof = false;

  async function* readStream(numBytes: number): AsyncIterable<Buffer> {
    let remaining = numBytes;
    while (buffer.length < remaining && !eof) {
      yield buffer;
      remaining -= buffer.length;
      index += buffer.length;

      const { value, done } = await iterator.next();
      if (done) {
        eof = true;
      } else {
        buffer = value;
      }
    }

    if (buffer.length < numBytes) {
      throw new Error("Reached EOF before number of bytes could be read");
    }

    const lastChunk = buffer.subarray(0, remaining);
    yield lastChunk;

    buffer = buffer.subarray(remaining);
    index += remaining;
  }

  async function read(numBytes: number): Promise<Buffer>;
  async function read<T>(
    numBytes: number,
    transform: (buffer: Buffer) => T
  ): Promise<T>;
  async function read(numBytes: number, fn?: (buffer: Buffer) => unknown) {
    const chunks = [];
    for await (const chunk of readStream(numBytes)) {
      chunks.push(chunk);
    }

    const returnedValue = Buffer.concat(chunks);
    return fn ? fn(returnedValue) : returnedValue;
  }

  return {
    /** Gives the current index that the reader is at */
    get index() {
      return index;
    },

    /** Tells if the reader has reached the end of the stream */
    get eof() {
      return eof;
    },

    /** Read a number of bytes as an AsyncIterable<Buffer> */
    readStream,

    /** Read a number of bytes as a Promise<Buffer> */
    read,

    // All numbers are little-endian. These all return Promise<number> in case
    // the raw bytes haven't been produced by the underlying stream yet.
    readUInt16: () => read(2, (buffer) => buffer.readUInt16LE()),
    readInt16: () => read(2, (buffer) => buffer.readInt16LE()),
    readUInt32: () => read(4, (buffer) => buffer.readUInt32LE()),
    readInt32: () => read(4, (buffer) => buffer.readInt32LE()),
  };
}
