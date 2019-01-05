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
const calculatefilesSize = (node: Node) => reduce((acc: number, n: Node): number => {
  if (n.type === 'directory') {
    return acc;
  }

  return acc + n.meta.size;
}, node, 0);

const du = (node: Node) => {
  const result: Array<[string, number]> = node.children.map(n => [n.name, calculatefilesSize(n)]);
  // Обычный дестракчеринг. JS позволяет пропускать имена если они не используются
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

export default du;
// END
