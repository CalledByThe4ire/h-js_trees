// @flow
type BaseNode = { name: string, meta: {} };
type File = BaseNode & {
  type: "file"
};

/* eslint-disable no-use-before-define */
type Directory = BaseNode & {
  type: "directory",
  children: Array<Node>
};
/* eslint-enable no-use-before-define */

type Node = File | Directory;

// BEGIN (write your solution here)
const map = (f: Node => any, node: Node) => {
  const updatedNode = f(node);

  return node.type === 'directory'
    ? { ...updatedNode, children: (node.children || []).map(n => map(f, n)) }
    : updatedNode;
};

export default map;
// END
