// @flow
type Entry = [string, any];
type Tree = (?Entry)[];
type Map = <T>(acc: T, entry: Entry) => T;
// BEGIN (write your solution here)
const reduce = <T>(fn: Map, node: Entry, acc: T): T => {
  const [key, value] = node;

  if (!Array.isArray(value) || (Array.isArray(value) && value.length === 0)) {
    return fn(acc, node);
  }
  return {
    ...acc,
    [key]: value.reduce((iAcc, n) => reduce(fn, n, iAcc), {}),
  };
};

const map: Map = (acc, [key, value]) => ({
  ...acc,
  [key]: !Array.isArray(value) ? value : {},
});

export default (tree: Tree) =>
  tree.reduce(
    (accumulator, entry: Entry) => reduce(map, entry, accumulator),
    {},
  );
// END
