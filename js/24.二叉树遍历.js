function TreeNode(element) {
  this.element = element;
  this.left = null;
  this.right = null;
}

class Tree {
  createTree() {
    let tree = new TreeNode("A");
    tree.left = new TreeNode("B");
    tree.left.left = new TreeNode("D");
    tree.left.left.left = new TreeNode("E");
    tree.left.right = new TreeNode("F");
    tree.left.right.left = new TreeNode("G");
    tree.right = new TreeNode("C");
    return tree;
  }
}

let tree = new Tree();
let treeNode = tree.createTree();

// 前序遍历 根-左-右
function DLR(obj) {
  console.log(obj.element);
  if (obj.left) {
    DLR(obj.left);
  }
  if (obj.right) {
    DLR(obj.right);
  }
}
console.log("前序遍历:");
DLR(treeNode);

// 中序遍历 左-根-右
function LDR(obj) {
  if (obj.left) {
    LDR(obj.left);
  }
  console.log(obj.element);
  if (obj.right) {
    LDR(obj.right);
  }
}
console.log("中序遍历:");
LDR(treeNode);

// 后序遍历 左-右-根
function LRD(obj) {
  if (obj.left) {
    LRD(obj.left);
  }
  if (obj.right) {
    LRD(obj.right);
  }
  console.log(obj.element);
}
console.log("后序遍历:");
LRD(treeNode);

// 广度优先遍历
function levelTraversal(obj) {
  let result = [];
  let tree = [];
  tree.push(obj);
  while (tree.length) {
    var node = tree.shift();
    result.push(node.element);
    if (node.left) {
      tree.push(node.left);
    }

    if (node.right) {
      tree.push(node.right);
    }
  }
  console.log(result);
}

levelTraversal(treeNode);
