import { ParserOptions } from "./parsing";
import { Reader } from "./reader";

type Props<T> = ParserOptions & {
  item: (reader: Reader) => Promise<T>;
};

export default async function list<T>({
  reader,
  item,
}: Props<T>): Promise<Array<T>> {
  const listSize = await reader.readUInt32();
  const items = [];
  for (let i = 0; i < listSize; i++) {
    const listItem = await item(reader);
    items.push(listItem);
  }

  return items;
}
