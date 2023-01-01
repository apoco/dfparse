export default function* range(count: number) {
  for (let i = 0; i < count; i++) {
    yield i;
  }
}
