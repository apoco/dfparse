import list from "./list";
import { ParserOptions } from "./parsing";
import stringList from "./string-list";

export default async function rawList({ reader }: ParserOptions) {
  return list({
    reader,
    item: (reader) => stringList({ reader }),
  });
}
