// @flow
// BEGIN (write your solution here)
const flatten = (list: Array<?mixed>): Array<?mixed> =>
  list.reduce(
    (acc: Array<?mixed>, element: Array<?mixed> | mixed) =>
      (element instanceof Array
        ? [...acc, ...flatten(element)]
        : [...acc, element]),
    [],
  );

export default flatten;
// END
