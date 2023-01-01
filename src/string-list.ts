import dfString from "./df-string";
import list from "./list";
import { ParserOptions } from "./parsing";

export default async function stringList({ reader }: ParserOptions) {
  return list({
    reader,
    item: (reader) => dfString({ reader }),
  });
}
