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
export default (root: Node, substr: string): Array<string> => {
  const iter = (
    tree: Node,
    combination: string,
    segmentsList: string,
    acc: Array<string>,
  ): Array<String> => {
    if (tree.children) {
      return tree.children.reduce(
        (cAcc: Array<string>, child: Array<Node>) =>
          iter(child, combination, path.join(segmentsList, child.name), cAcc),
        acc,
      );
    }

    if (tree.type === 'file' && tree.name.includes(combination)) {
      return [...acc, path.join(segmentsList)];
    }
    return acc;
  };
  return iter(root, substr, root.name, []);
};
// END
