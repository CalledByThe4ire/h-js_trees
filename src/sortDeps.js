// @flow
// BEGIN (write your solution here)
export default (obj: {[string]: Array<?string>}): Array<?string> => {
  const topologicalSortHelper = (node: string, explored: Set<?string>, s: Array<?string>) => {
    explored.add(node);
    if (obj[node]) {
      obj[node].forEach((n) => {
        if (!explored.has(n)) {
          topologicalSortHelper(n, explored, s);
        }
      });
    }

    s.push(node);
  };

  const stack: Array<?string> = [];
  const explored: Set<?string> = new Set();

  Object.keys(obj).forEach((node) => {
    if (!explored.has(node)) {
      topologicalSortHelper(node, explored, stack);
    }
  });
  return stack;
};
// END
