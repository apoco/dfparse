import list from "./list";
import pair from "./pair";
import { ParserOptions } from "./parsing";

export default async function mysteryHistory({ reader }: ParserOptions) {
  // For each record (there are 305 of them), we have eight pairs of
  // numbers. For each u/v pair, "u" is always less than or equal to "v". In
  // the subsequent record, a transition happens for each pair at the same
  // index:
  //
  // u/v -> v/w, where w >= v
  //
  // So each record seems to be a step in a sequence, and each pair
  // represents a previous/next value for a property, which I'll refer to as
  // "a" through "h".
  //
  // In the first record we show a, d, g, and h increase. The increase
  // from previous to next is larger than in records that follow, so it
  // makes me wonder if the previous values for the first represents more
  // than one period prior (like maybe this only maintains history so
  // far back?)
  //
  //       a   b   c    d e  f   g h
  // -1: 256 225 111  767 6 91   5 4
  //  0: 313 225 111 1103 6 91 386 5
  //
  // ...and then for a while we see statis except for g
  //
  //      a   b   c    d e  f   g h
  // 1: 313 225 111 1103 6 91 388 5
  // 2: 313 225 111 1103 6 91 396 5
  // 3: 313 225 111 1103 6 91 404 5
  // 4: 313 225 111 1103 6 91 408 5
  // 5: 313 225 111 1103 6 91 410 5
  // 6: 313 225 111 1103 6 91 414 5
  // 7: 313 225 111 1103 6 91 418 5
  // 8: 313 225 111 1103 6 91 420 5
  // 9: 313 225 111 1103 6 91 428 5
  //
  // ...and now a new inflection point starts! g remains static, but c and f
  // start expanding. The pattern of expansion changes a few times, but some
  // things remain true:
  //
  // 1. None of the properties ever go down in value; it's always static or
  //    an increase.
  // 2. For each record, at least one property increases
  // 3. The largest property jump, not counting the first, was 44
  // 4. Property changes are usually by multiples of 2
  // 5. Property "b" never changed, and "a" and "h" only changed on the
  //    first record
  const records = await list({
    reader,
    item: async (reader) => [
      await pair({ reader }), // [n, 313]
      await pair({ reader }), // [n, 225]
      await pair({ reader }), // [n, 111]
      await pair({ reader }), // [n, 1103]
      await pair({ reader }), // [n, 6]
      await pair({ reader }), // [n, 91]
      await pair({ reader }), // [a, b]
      await pair({ reader }), // [n, 5]
    ],
  });

  return [
    records[0].map(([prev, next]) => prev),
    ...records.map((pairs) => pairs.map(([prev, next]) => next)),
  ];
}
