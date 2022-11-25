class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    };

    let currentNode = this.root;
    while (true){
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = new Node(val);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right.val;
        }
      }
      }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    };

    if(val < currentNode.val){
      if(currentNode.left === null){
        currentNode.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, currentNode.left);
      }
    } else if (val > currentNode.val){
      if(currentNode.right === null){
        currentNode.right = new Node(val);
        return this;
      } else {
        currentNode = currentNode.right;
        return this.insertRecursively(val, currentNode.right);
      }
    }   
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root === null){
      this.root = new Node(val);
    }
    let currentNode = this.root;

    while(currentNode){
      if(currentNode.val === val) return currentNode; 

      if(currentNode.val > val){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if(this.root === null){
      this.root = new Node(val);
    }
    if(currentNode.val === val) return currentNode; 
    
    if(currentNode.val > val){
      if(currentNode.left === null) return;
      return this.findRecursively(val, currentNode.left)

    } else {
      if(currentNode.right === null) return;
      return this.findRecursively(val, currentNode.right)
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  // dfsPreOrder() {
  //   let output = [];
  //   let current = this.root;
  //   // traverse myself first then go left and right 
  //   function traverse(node){
  //     output.push(node.val);
  //     node.left && traverse(node.left);
  //     node.right && traverse(node.right);
  //   }
  //   traverse(current);
  //   return output;
  // }

  // dfsPreOrder() {

  // }



  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  // dfsInOrder(node=this.root) {
  //   // left, myself then right
  //   let output = []
  //   if(node.left) this.traverse(node.left);
  //   output.push(node.val)
  //   if(node.right) this.traverse(node.right);
  //   return output

  // }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  // dfsPostOrder(node=this.root) {
  //   // traverse left, right, then myself
  //   if(node.left) this.traverse(node.left);
  //   if(node.right) this.traverse(node.right);
  //   output.push(node.val)
  //   return output



  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  // bfs() {
  //   const queue = [this.root];
  //   while (queue.length > 0) {
  //     const curr = queue.shift();
  //     console.log(curr);
  //     if (curr.left !== null) {
  //       queue.push(curr.left);
  //     }
  //     if (curr.right !== null) {
  //       queue.push(curr.right);
  //     }
  //   }
  //   return queue;
  // }






  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
