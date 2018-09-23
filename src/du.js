/* eslint-disable no-confusing-arrow, function-paren-newline */

import { reduce } from 'hexlet-immutable-fs-trees';

// @flow
type BaseNode = { name: string, meta: {} };
type File = BaseNode & {
  type: 'file'
};

/* eslint-disable no-use-before-define */
type Directory = BaseNode & {
  type: 'directory',
  children: Array<Node>
};
/* eslint-enable no-use-before-define */

type Node = File | Directory;

// BEGIN (write your solution here)
const calculateFilesSize = (tree: Node): number =>
  reduce(
    (acc: number, node: Node) =>
      node.type === 'file' ? acc + node.meta.size : acc,
    tree,
    0,
  );

const compareNumbers = (a: number, b: number): number => b - a;

export default (tree: Node): Array<[string, number]> => {
  const { children }: { children: Node } = tree;
  const mapped: Array<[string, number]> = children.map((n: Node) => [
    n.name,
    calculateFilesSize(n),
  ]);
  const sorted: Array<number> = mapped
    .map((item: Array<string, number>) =>
      item.filter((element: string | number) => typeof element === 'number'),
    )
    .reduce(
      (acc: Array<number>, item: Array<[number]>) => [...acc, ...item],
      [],
    )
    .sort(compareNumbers);
  return sorted.reduce((acc: Array<[string, number]>, item: number) => {
    const [value]: number = sorted.filter((element: number) => element === item);
    const [entry]: Array<string, number> = mapped.filter(
      (element: Array<string, number>) => {
        const [, num] = element;
        return num === value;
      },
    );
    return [...acc, entry];
  }, []);
};
// END
