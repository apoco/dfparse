import createReader from "./reader";
import { createUnzip } from "zlib";
import { Readable } from "stream";
import { ParserOptions } from "./parsing";

export default function compressedBlocksReader({ reader }: ParserOptions) {
  const stream = (async function* () {
    while (!reader.eof) {
      const compressedByteLength = await reader.readUInt32();
      const compressedStream = Readable.from(
        reader.readStream(compressedByteLength)
      );
      yield* compressedStream.pipe(createUnzip());
    }
  })();

  return createReader({ stream });
}
