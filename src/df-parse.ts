import path from "path";
import saveFile from "./save-file";

type DfParseOptions = {
  /** Root directory of Dwarf Fortress; should have a data and save subdirectory */
  rootPath: string;
};

type SaveOptions = {
  /** Name of the save (corresponds to an entry in the <root>/save folder) */
  name: string;
};

/** Creates a Dwarf Fortress parser */
export default function dfParse({ rootPath }: DfParseOptions) {
  return {
    save({ name }: SaveOptions) {
      return saveFile({ path: path.join(rootPath, "save", name) });
    },
  };
}
