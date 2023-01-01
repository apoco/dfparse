import fsPath from "path";
import { createReadStream } from "fs";
import createReader from "./reader";
import compressedBlocksReader from "./compressed-blocks-reader";
import worldData from "./world-data";

type SaveFileOptions = {
  path: string;
};

export default async function saveFile({ path }: SaveFileOptions) {
  const stream = createReadStream(fsPath.join(path, "world.sav"));
  let reader = createReader({ stream });

  const saveVersion = await reader.readUInt32();
  const isCompressed = await reader.readUInt32();
  if (isCompressed) {
    reader = compressedBlocksReader({ reader });
  }

  return {
    saveVersion,
    isCompressed,
    worldData: await worldData({ reader }),
    index: reader.index,
    remainder: await reader.read(96),
  };
}
