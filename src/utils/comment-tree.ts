import { isTypeNode } from 'typescript';

const getCommentFromTree = (
  node: any,
  nodeId: any,
): any => {
  if (node.nodeId == nodeId) {
    return node;
  } else if (node.children != null) {
    let result = null;
    for (
      let i = 0;
      result == null && i < node.children.length;
      i++
    ) {
      result = getCommentFromTree(node.children[i], nodeId);
    }
    return result;
  }
  return null;
};

const insertCommentIntoTree = (
  node: any,
  nodeId: any,
  newNode: any,
): any => {
  node.map((item: any) => {
    console.log(item);
    if (item.id === nodeId) {
      item.replies.push(newNode);
    }
    if (item.replies && item.replies.length > 0) {
      insertCommentIntoTree(item.replies, nodeId, newNode);
    }
  });
  return node;
};

function updateCommentInTree(
  node: any,
  nodeId: any,
  newNode: any,
) {
  if (node.nodeId == nodeId) {
    node.nodeName = newNode.nodeName;
  } else if (node.children != null) {
    for (let i = 0; i < node.children.length; i++) {
      updateCommentInTree(
        node.children[i],
        nodeId,
        newNode,
      );
    }
  }
}

const commentTreeHandler: any = () => {
  return {
    getCommentFromTree,
    insertCommentIntoTree,
    updateCommentInTree,
  };
};

export default commentTreeHandler;
