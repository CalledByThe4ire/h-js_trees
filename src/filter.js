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
const filter = (f: Node => boolean, node: Node) => {
  if (!f(node)) {
    return null;
  }

  return node.type === 'directory'
    ? {
        ...node,
        children: (node.children || []).map(n => filter(f, n)).filter(v => v),
      }
    : node;
};

export default filter;
// END
