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

const map = (func: (item: {name: string}) => Directory, tree: Node): Node => {
  const { children }: { children: Array<Node> } = (tree: Node);
  const { name: updatedName }: { name: string } = func(tree);

  if (!children) {
    return { ...tree, name: updatedName };
  }
  return {
    ...tree,
    name: updatedName,
    children: children.map(c => map(func, c)),
  };
};

export default map;
// END

