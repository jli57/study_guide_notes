function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertIteratively = function(node) {
  let rootNode = this.root;
  while ( rootNode ) {
    if ( rootNode.val >= node.val ) {
      parent = rootNode;
      rootNode = rootNode.left;
    } else if ( rootNode.val < node.val ) {
      parent = rootNode;
      rootNode = rootNode.right;
    }
  }
}

BinarySearchTree.prototype.insertRecursively = function() {
a
}