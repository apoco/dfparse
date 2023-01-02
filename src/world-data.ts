import dfString from "./df-string";
import { Reader } from "./reader";
import mysteryHistory from "./mystery-history";
import calendar from "./calendar";
import generatedRaws from "./generated-raws";
import stringTables from "./string-tables";
import dataFiles from "./data-files";
import uintList from "./uint-list";
import map from "./map";
import list from "./list";

type Props = { reader: Reader };

// We have a lot of lists of UINT32s that I'm speculating are IDs for categories
// of object instances. I don't know yet what these objects are, but there are
// correlating references in various places between counters and idTables
const ENTITY_TYPE_01 = 'ENTITY_TYPE_01';
const ENTITY_TYPE_02 = 'ENTITY_TYPE_02';
const ENTITY_TYPE_03 = 'ENTITY_TYPE_03';
const ENTITY_TYPE_04 = 'ENTITY_TYPE_04';
const ENTITY_TYPE_05 = 'ENTITY_TYPE_05';
const ENTITY_TYPE_06 = 'ENTITY_TYPE_06';
const ENTITY_TYPE_07 = 'ENTITY_TYPE_07';
const ENTITY_TYPE_08 = 'ENTITY_TYPE_08';
const ENTITY_TYPE_09 = 'ENTITY_TYPE_09';
const ENTITY_TYPE_10 = 'ENTITY_TYPE_10';
const ENTITY_TYPE_11 = 'ENTITY_TYPE_11';
const ENTITY_TYPE_12 = 'ENTITY_TYPE_12';
const ENTITY_TYPE_13 = 'ENTITY_TYPE_13';
const ENTITY_TYPE_14 = 'ENTITY_TYPE_14';
const ENTITY_TYPE_15 = 'ENTITY_TYPE_15';
const ENTITY_TYPE_16 = 'ENTITY_TYPE_16';
const ENTITY_TYPE_17 = 'ENTITY_TYPE_17';
const ENTITY_TYPE_18 = 'ENTITY_TYPE_18';
const ENTITY_TYPE_19 = 'ENTITY_TYPE_19';
const ENTITY_TYPE_20 = 'ENTITY_TYPE_20';
const ENTITY_TYPE_21 = 'ENTITY_TYPE_21';
const ENTITY_TYPE_22 = 'ENTITY_TYPE_22';
const ENTITY_TYPE_23 = 'ENTITY_TYPE_23';
const ENTITY_TYPE_24 = 'ENTITY_TYPE_24';
const ENTITY_TYPE_25 = 'ENTITY_TYPE_25';
const ENTITY_TYPE_26 = 'ENTITY_TYPE_26';
const ENTITY_TYPE_27 = 'ENTITY_TYPE_27';
const ENTITY_TYPE_28 = 'ENTITY_TYPE_28';
const ENTITY_TYPE_29 = 'ENTITY_TYPE_29';
const ENTITY_TYPE_30 = 'ENTITY_TYPE_30';
const ENTITY_TYPE_31 = 'ENTITY_TYPE_31';
const ENTITY_TYPE_32 = 'ENTITY_TYPE_32';
const ENTITY_TYPE_33 = 'ENTITY_TYPE_33';
const ENTITY_TYPE_34 = 'ENTITY_TYPE_34';
const ENTITY_TYPE_35 = 'ENTITY_TYPE_35';
const ENTITY_TYPE_36 = 'ENTITY_TYPE_36';
const ENTITY_TYPE_37 = 'ENTITY_TYPE_37';
const ENTITY_TYPE_38 = 'ENTITY_TYPE_38';
const ENTITY_TYPE_39 = 'ENTITY_TYPE_39';
const ENTITY_TYPE_40 = 'ENTITY_TYPE_40';
const ENTITY_TYPE_41 = 'ENTITY_TYPE_41';
const ENTITY_TYPE_42 = 'ENTITY_TYPE_42';
const ENTITY_TYPE_43 = 'ENTITY_TYPE_43';

export default async function worldData({ reader }: Props) {
  return {
    counters: await counters(reader),
    saveName: await dfString({ reader }), // Maybe? Mine is empty
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
    idTables: await idTables(reader),
  };
}

async function counters(reader: Reader) {
  // A bunch of numbers, some of which seem to correspond to the largest entry
  // of an ID table (for empty lists, this value is -1). Not all ID tables have
  // representation here, and some of these numbers I don't know a correlation
  // for, so this still will take some insight.

  return {
    [ENTITY_TYPE_01]: await reader.readInt32(), //  13,889
    unknown1: await reader.readInt32(),         //  13,836
    [ENTITY_TYPE_02]: await reader.readInt32(), //  90,818
    [ENTITY_TYPE_10]: await reader.readInt32(), //   2,485
    [ENTITY_TYPE_12]: await reader.readInt32(), //  12,217
    [ENTITY_TYPE_13]: await reader.readInt32(), //     706
    [ENTITY_TYPE_03]: await reader.readInt32(), // 204,770
    [ENTITY_TYPE_04]: await reader.readInt32(), //      -1
    unknown2: await reader.readUInt32(),        //  12,298
    [ENTITY_TYPE_06]: await reader.readInt32(), //   3,405
    [ENTITY_TYPE_07]: await reader.readInt32(), //       3
    unknown3: await reader.readUInt32(),        //     184
    unknown4: await reader.readUInt32(),        //  16,775
    unknown5: await reader.readUInt32(),        // 125,126
    unknown6: await reader.readUInt32(),        //   7,367
    unknown7: await reader.readUInt32(),        //   2,553
    unknown8: await reader.readUInt32(),        //       8
    [ENTITY_TYPE_08]: await reader.readInt32(), //      -1
    [ENTITY_TYPE_21]: await reader.readInt32(), //     161
    [ENTITY_TYPE_22]: await reader.readInt32(), //      -1
    [ENTITY_TYPE_23]: await reader.readInt32(), //  76,889
    [ENTITY_TYPE_24]: await reader.readInt32(), //       5
    [ENTITY_TYPE_25]: await reader.readInt32(), //   3,599
    unknown9: await reader.readUInt32(),        //     363
    [ENTITY_TYPE_27]: await reader.readInt32(), //   1,701
    [ENTITY_TYPE_28]: await reader.readInt32(), //      22
    [ENTITY_TYPE_29]: await reader.readInt32(), //      -1
    [ENTITY_TYPE_30]: await reader.readInt32(), // 877,981
    [ENTITY_TYPE_31]: await reader.readInt32(), // 912,073
    [ENTITY_TYPE_32]: await reader.readInt32(), //      -1
    [ENTITY_TYPE_33]: await reader.readInt32(), //     798
    [ENTITY_TYPE_34]: await reader.readInt32(), //     392
    [ENTITY_TYPE_35]: await reader.readInt32(), //      90
    [ENTITY_TYPE_36]: await reader.readInt32(), //      89
    [ENTITY_TYPE_37]: await reader.readInt32(), //      90
    [ENTITY_TYPE_38]: await reader.readInt32(), //      20
    [ENTITY_TYPE_39]: await reader.readInt32(), //      20
    [ENTITY_TYPE_40]: await reader.readInt32(), //     341
    [ENTITY_TYPE_41]: await reader.readInt32(), //     373
    [ENTITY_TYPE_42]: await reader.readInt32(), //     280
    [ENTITY_TYPE_43]: await reader.readInt32(), //     276
  };
}

async function idTables(reader: Reader) {
  return {
    [ENTITY_TYPE_01]: {
      // 806 items, ranging from 175 to 13,889.
      ids: await uintList({ reader }),

      // 722 items, not in order. Subset of ids.
      subset: await uintList({ reader }),
    },

    [ENTITY_TYPE_02]: {
      // Map has 19,015 entries
      map: await map({
        reader,
        key: (reader) => reader.readUInt32(), // Range 0 through 90818
        value: (reader) => reader.readUInt32(), // 76 distinct values, from 0 to 90
      }),

      // 18,300 items, ever increasing, but not monotonically, from 362 to 90818
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_03]: {
      // 227 items, ever increasing, but not monotonically, from 149331 to 204770
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_04]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_05]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_06]: {
      // Map is 1,982 items
      map: await map({
        reader,
        key: (reader) => reader.readUInt32(), // Range 10 - 3405
        value: (reader) => reader.readUInt32(), // 35 distinct values, from 0 to 54
      }),

      // List of IDs, 1,982 entries, same size as map above. Is exactly all of the
      // keys of that map in order.
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_07]: {
      // List of 1 value, 3
      ids: await uintList({ reader })
    },

    [ENTITY_TYPE_08]: {
      // Empty
      ids: await uintList({ reader })
    },

    [ENTITY_TYPE_09]: {
      // Map of 10 items
      map: await map({
        reader,
        key: (reader) => reader.readUInt32(), // Range 110 - 180
        value: (reader) => reader.readUInt16(), // Always 0... could also be empty strings?
      }),
    },

    [ENTITY_TYPE_10]: {
      // 2486 entries... is just the numbers 0 through 2485 :/
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_11]: {
      // There's just one number, 364. Maybe this is a singleton?
      id:  await reader.readUInt32(),
    },

    [ENTITY_TYPE_12]: {
      // 12,218 entries... is just the numbers 0 to 12217 :/
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_13]: {
      // 707 entries, is just the numbers 0 to 706 :/
      ids: await uintList({ reader }),
    },

    // Just one number... maybe is a singleton?
    [ENTITY_TYPE_14]: {
      id: await reader.readUInt32(),  // 9038
    },

    [ENTITY_TYPE_15]: {
      // 29, 10, 0
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_16]: {
      // 3000 entries, numbers from 29361 to 32360 in monotonic order
      ids: await uintList({ reader }),

      // 87 entries, number ranging from 30821 to 32360. Subset of nums10.
      subset: await uintList({ reader }),
    },

    [ENTITY_TYPE_17]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_18]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_19]: {
      // List of 5 records of 3 32 byte ints perhaps? Content for my file looks
      // like:
      // [  602, 1291,   0]
      // [  289, 1602, 270]
      // [ 7275,    0,   0]
      // [    0,    0,   0]
      // [33610,   21, 101]
      unknown: await list({
        reader,
        item: async (reader) => [
          await reader.readUInt32(),
          await reader.readUInt32(),
          await reader.readUInt32(),
        ]
      }),
    },

    [ENTITY_TYPE_20]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_21]: {
      // List of 162 integers, simply the numbers 0 through 161
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_22]: {
      // Empty
      ids: await uintList({ reader })
    },

    [ENTITY_TYPE_23]: {
      // List of 57 increasing integers, range 16611 to 76889
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_24]: {
      // List of 6, simply the numbers 0 through 5
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_25]: {
      // List of 3600 numbers, simply the numbers 0 through 3599
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_26]: {
      // List of 637 numbers, simply the numbers 0 through 636
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_27]: {
      // List of 1702 numbers, simply the numbers 0 through 1701
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_28]: {
      // List of 23 numbers, simply the numbers 0 through 22
      ids: await uintList({ reader }),
    },
    
    [ENTITY_TYPE_29]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_30]: {
      // List of 1598 incrementing numbers, ranging from 0 to 877,981
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_31]: {
      // List of 2610 incrementing numbers, ranging from 0 to 912,073
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_32]: {
      // Empty
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_33]: {
      // List of 799 numbers, simply the numbers 0 through 798
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_34]: {
      // List of 393 numbers, simply the numbers 0 through 392
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_35]: {
      // List of 91 numbers, simply the numbers 0 through 90
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_36]: {
      // List of 90 numbers, simply the numbers 0 through 89
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_37]: {
      // List of 91 numbers, simply the numbers 0 through 90
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_38]: {
      // List of 21 numbers, simply the numbers 0 through 20
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_39]: {
      // List of 21 numbers, simply the numbers 0 through 20
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_40]: {
      // List of 342 numbers, simply the numbers 0 through 341
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_41]: {
      // List of 374 numbers, simply the numbers 0 through 373
      ids: await uintList({ reader }),      
    },

    [ENTITY_TYPE_42]: {
      // List of 281 numbers, simply the numbers 0 through 280
      ids: await uintList({ reader }),
    },

    [ENTITY_TYPE_43]: {
      // List of 277 numbers, simply the numbers 0 through 276
      ids: await uintList({ reader }),
    },
  };
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
