import { ParserOptions } from "./parsing";
import rawList from "./raw-list";

export default async function generatedRaws({ reader }: ParserOptions) {
  return {
    inorganics: await rawList({ reader }),
    unknown: await rawList({ reader }),
    items: await rawList({ reader }),
    creatures: await rawList({ reader }),
    entities: await rawList({ reader }),
    reactions: await rawList({ reader }),
    interactions: await rawList({ reader }),
    languages: await rawList({ reader }),
  };
}
