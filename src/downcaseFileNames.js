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
  
};

export default downcaseFileNames;
// END
