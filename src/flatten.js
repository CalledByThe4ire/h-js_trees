// @flow
// BEGIN (write your solution here)
const extract = (element: mixed, accumulator: Array<mixed>): Array<mixed> => {
  if (!Array.isArray(element)) {
    return [...accumulator, element];
  }
  return element.reduce((iAcc: Array<mixed>, child: mixed) => extract(child, iAcc), accumulator);
};

export default (items: Array<mixed>): Array<mixed> =>
  items.reduce((acc: Array<mixed>, item: mixed) => extract(item, acc), []);
// END
