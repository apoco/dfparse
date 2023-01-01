import { ParserOptions } from "./parsing";
import range from "./range";
import { Reader } from "./reader";
import stringList from "./string-list";
import uintList from "./uint-list";

export default async function dataFiles({ reader }: ParserOptions) {
  // These all have the same length; they associate by matching indexes
  const ids = await stringList({ reader });
  const versions = await uintList({ reader });
  const compatVersions = await uintList({ reader });
  const directories = await stringList({ reader });
  const names = await stringList({ reader });
  const displayVersions = await stringList({ reader });

  return [...range(ids.length)].map((idx) => ({
    id: ids[idx],
    name: names[idx],
    displayVersion: displayVersions[idx],
    version: versions[idx],
    compatibility: compatVersions[idx],
    directory: directories[idx],
  }));
}
