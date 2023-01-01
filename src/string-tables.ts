import { ParserOptions } from "./parsing";
import { Reader } from "./reader";
import stringList from "./string-list";

export default async function stringTables({ reader }: ParserOptions) {
  return {
    inorganics: await stringList({ reader }),
    plants: await stringList({ reader }),
    bodyTypes: await stringList({ reader }),
    bodyParts: await stringList({ reader }),
    creatures: await stringList({ reader }),
    items: await stringList({ reader }),
    buildings: await stringList({ reader }),
    entityClasses: await stringList({ reader }),
    words: await stringList({ reader }),
    symbols: await stringList({ reader }),
    languages: await stringList({ reader }),
    colors: await stringList({ reader }),
    shapes: await stringList({ reader }),
    colorPatterns: await stringList({ reader }),
    tasks: await stringList({ reader }),
    materialTemplates: await stringList({ reader }),
    tissueTemplates: await stringList({ reader }),
    bodyTemplates: await stringList({ reader }),
    creatureTemplates: await stringList({ reader }),
    interactions: await stringList({ reader }),
    events: await stringList({ reader }),
    tracks: await stringList({ reader }),
    announcements: await stringList({ reader }),
  };
}
