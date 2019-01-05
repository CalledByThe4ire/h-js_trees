import path from 'path';
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
const findFilesByName = (root: Node, substr: string): Array<string | null> => {
  const iter = (n: Node, ancestry: string, acc: Array<string | null>) => {
    const newAncestry: string = path.join(ancestry, n.name);
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, newAncestry] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;
// END
