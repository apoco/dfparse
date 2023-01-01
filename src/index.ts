import dfParse from "./df-parse";

export { dfParse };

const DF_ROOT =
  "/mnt/c/Program Files (x86)/Steam/steamapps/common/Dwarf Fortress";

export async function test() {
  const saveFile = await dfParse({ rootPath: DF_ROOT }).save({
    name: "region1",
  });

  console.log(saveFile);
}

test();
