import { ParserOptions } from "./parsing";

export default async function dfString({ reader }: ParserOptions) {
  const length = await reader.readUInt16();
  return reader.read(length, (buffer) => buffer.toString("ascii"));
}
