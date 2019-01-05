// @flow
// BEGIN (write your solution here)
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

const downcaseFileNames = (node: Node): Node => {
  if (node.type === 'directory') {
    return { ...node, children: node.children.map(downcaseFileNames) };
  }
  return { ...node, name: node.name.toLowerCase() };
};

export default downcaseFileNames;
// END
