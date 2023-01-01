import { ParserOptions } from "./parsing";

export default async function calendar({ reader }: ParserOptions) {
  // Speculative. The year seems to appear twice, but the year also appeared
  // earlier as well...

  const age = await reader.readUInt16(); // 0, just a guess that it's age
  const year = await reader.readUInt32(); // 106
  const day = await reader.readUInt32(); // 106,832, 6th of Hematite?

  // 336 days in the year (28 * 12)
  // We're in the 6th of Hematite, which should be day 90.
  // Numbers don't add up... if the 106,000 portion represents the year,
  // then the 832 could be the day portion, but how are we already at 832
  // when it's only the 6th of Hematite? We'd only have 999 max range to work
  // within. Hex is 1_A150, but I can't find way for that to make sense either.

  return { age, year, day };
}
