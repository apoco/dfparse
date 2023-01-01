import dfString from "./df-string";
import { Reader } from "./reader";
import mysteryHistory from "./mystery-history";
import calendar from "./calendar";
import generatedRaws from "./generated-raws";
import stringTables from "./string-tables";
import dataFiles from "./data-files";
import uintList from "./uint-list";
import list from "./list";
import map from "./map";

type Props = { reader: Reader };

export default async function worldData({ reader }: Props) {
  return {
    unknown1: await unknownBlock1(reader),
    gameName: await dfString({ reader }),
    worldName: await dfString({ reader }),
    year: await reader.readUInt32(), // 106
    unknown2: await reader.read(8), // D1 49 31 ED 75 0A 54 4E, 6th of Hematite?
    fullWorldName: await dfString({ reader }),
    calendar: await calendar({ reader }),
    unknown3: await reader.read(14), // 01, then 13 00's
    generatedRaws: await generatedRaws({ reader }),
    stringTables: await stringTables({ reader }),
    history: await mysteryHistory({ reader }),
    dataFiles: await dataFiles({ reader }),
    unknown4: await unknownBlock4(reader),

    // 806 items, ever increasing but not monotonically, from 175 to 13889.
    nums1: await uintList({ reader }),
    // 722 items, ranging from 175 to 13889, not in order, but all unique. All
    // items in this list are also in nums1
    nums2: await uintList({ reader }),

    // Map has 19,015 entries
    someMap1: await map({
      reader,
      key: (reader) => reader.readUInt32(), // range is 0 to 90818
      value: (reader) => reader.readUInt32(), // 76 unique values, from 0 to 90
    }),

    // 18,300 items, ever increasing, but not monotonically, from 362 to 90818
    nums3: await uintList({ reader }),

    // 227 items, ever increasing, but not monotonically, from 149331 to 204770
    nums4: await uintList({ reader }),

    unknown5: await reader.read(8), // all zeros

    // Map is 1,982 items
    someMap2: await map({
      reader,
      key: (reader) => reader.readUInt32(), // Range is 10 to 3405
      value: (reader) => reader.readUInt32(), // 35 unique values, from 0 to 54
    }),

    // List of IDs, 1,982 entries, same size as map above. Is exactly all of the
    // keys of that map in order :/
    nums5: await uintList({ reader }),

    unknown6: await reader.read(12), // three ints, 1, 3, 0

    // Map of 10 items
    someMap3: await map({
      reader,
      key: (reader) => reader.readUInt32(), // Range from 110 to 180
      value: (reader) => reader.readUInt16(), // Always 0... could also be empty strings?
    }),

    // 2486 entries... is just the numbers 0 through 2485 :/
    nums6: await uintList({ reader }),

    unknown7: await reader.readUInt32(), // 364

    // 12,218 entries... is just the numbers 0 to 12217 :/
    nums7: await uintList({ reader }),

    // 707 entries, is just the numbers 0 to 706 :/
    nums8: await uintList({ reader }),

    unknown8: await reader.readUInt32(), // 9038
    nums9: await uintList({ reader }), // 20, 10, 0

    // 3000 entries, numbers from 29361 to 32360 in monotonic order
    nums10: await uintList({ reader }),

    // 87 entries, number ranging from 30821 to 32360. Subset of nums10.
    nums11: await uintList({ reader }),
  };
}

async function unknownBlock1(reader: Reader) {
  await reader.readUInt32(); //     13,889
  await reader.readUInt32(); //     13,836
  await reader.readUInt32(); //     90,818
  await reader.readUInt32(); //      2,485
  await reader.readUInt32(); //     12,217
  await reader.readUInt32(); //        706
  await reader.readUInt32(); //    204,770
  await reader.readInt32(); //          -1
  await reader.readUInt32(); //     12,298
  await reader.readUInt32(); //      3,405
  await reader.readUInt32(); //          3
  await reader.readUInt32(); //        184
  await reader.readUInt32(); //     16,775
  await reader.readUInt32(); //    125,126
  await reader.readUInt32(); //      7,367
  await reader.readUInt32(); //      2,553
  await reader.readUInt32(); //          8
  await reader.readInt32(); //          -1
  await reader.readUInt32(); //        161
  await reader.readInt32(); //          -1
  await reader.readUInt32(); //     76,889
  await reader.readUInt32(); //          5
  await reader.readUInt32(); //      3,599
  await reader.readUInt32(); //        363
  await reader.readUInt32(); //      1,701
  await reader.readUInt32(); //         22
  await reader.readInt32(); //          -1
  await reader.readUInt32(); //    877,981
  await reader.readUInt32(); //    912,073
  await reader.readInt32(); //          -1
  await reader.readUInt32(); //        798
  await reader.readUInt32(); //        392
  await reader.readUInt32(); //         90
  await reader.readUInt32(); //         89
  await reader.readUInt32(); //         90
  await reader.readUInt32(); //         20
  await reader.readUInt32(); //         20
  await reader.readUInt32(); //        341
  await reader.readUInt32(); //        373
  await reader.readUInt32(); //        180
  await reader.readUInt32(); //        276
  await reader.readUInt16(); //          0
}

async function unknownBlock4(reader: Reader) {
  return [
    await reader.readUInt32(), // 0
    await reader.readUInt32(), // 1
    await reader.readUInt32(), // 0
    await reader.readUInt32(), // 0
    await reader.readUInt32(), // 0
  ];
}
