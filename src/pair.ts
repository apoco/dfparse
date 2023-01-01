import { ParserOptions } from "./parsing";

export default async function pair({ reader }: ParserOptions) {
  return [await reader.readUInt32(), await reader.readUInt32()];
}
