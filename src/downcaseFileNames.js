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

const downcaseFileNames = (tree: Node): Node => {
  // if (!Object.keys(tree).length) return null;
  if (tree.type === 'directory') {
    const { children }: { children: Array<Node> } = tree;
    const subTree: Directory = { ...tree, children: children.map(downcaseFileNames) };
    return subTree;
  }

  const { name } = tree;
  const subTree: File = { ...tree, name: name.toLowerCase() };
  return subTree;
};

export default downcaseFileNames;
// END
