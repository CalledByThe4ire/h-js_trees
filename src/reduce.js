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
const reduce = <T>(f: (T, Node) => T, node: Node, acc: T): T => {
  const newAcc = f(acc, node);

  if (node.type === 'file') {
    return newAcc;
  }
  return (node.children || []).reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

export default reduce;
// END
