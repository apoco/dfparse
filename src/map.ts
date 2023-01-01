import list from "./list";
import { ParserOptions } from "./parsing";
import { Reader } from "./reader";

type Props<K, V> = ParserOptions & {
  key: (reader: Reader) => Promise<K>;
  value: (reader: Reader) => Promise<V>;
};

export default async function map<K, V>({
  reader,
  key,
  value,
}: Props<K, V>): Promise<Map<K, V>> {
  const keyValues: Array<[K, V]> = await list({
    reader,
    // List size is 1,982 items
    item: async (reader) => [
      await key(reader), // Sorted by this, range is 10 to 3405
      await value(reader), // 35 unique values, from 0 to 54
    ],
  });

  return new Map(keyValues);
}
