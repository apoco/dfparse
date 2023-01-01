import list from "./list";
import { ParserOptions } from "./parsing";

export default async function uintList({ reader }: ParserOptions) {
  return list({
    reader,
    item: (reader) => reader.readUInt32(),
  });
}
