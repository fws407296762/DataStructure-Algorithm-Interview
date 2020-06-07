import Node from "./Node";

export class BinarySearchTree {
  private root = null;

  // 向树中插入一个新的键
  insert(key){
    let newNode = new Node(key);
    if(this.root === null){
      this.root = newNode;
    }else{
      this.insertNode(this.root,newNode);
    }
  }
  private insertNode(node,newNode){
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode;
      }else{
        this.insertNode(node.left,newNode);
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        this.insertNode(node.right,newNode);
      }
    }
  }
  // 通过中序遍历方式遍历所有节点
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root,callback)
  }
  private inOrderTraverseNode(node,callback){
      if(node !== null){
        this.inOrderTraverseNode(node.left,callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right,callback);
      }
  }
  // 通过先序遍历方式遍历所有节点
  preOrderTraverse(callback){
    this.preOrderTraverseNode(this.root,callback);
  }
  private preOrderTraverseNode(node,callback){
    if(node !== null){
      callback(node.key);
      this.preOrderTraverseNode(node.left,callback);
      this.preOrderTraverseNode(node.right,callback);
    }
  }
  // 通过后序遍历方式遍历所有节点
  postOrderTraverse(callback){
    this.postOrderTraverseNode(this.root,callback);
  }
  private postOrderTraverseNode(node,callback){
    if(node !== null){
      this.postOrderTraverseNode(node.left,callback);
      this.postOrderTraverseNode(node.right,callback);
      callback(node.key);
    }
  }
  // 返回树中最小的值/键
  min(){
    return this.minNode(this.root);
  }
  private minNode(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node.key;
    }
    return null;
  }
  // 返回树中最大的值/键
  max(){
    this.maxNode(this.root);
  }
  private maxNode(node){
    if(node){
      while(node && node.right !== null){
        node = node.right;
      }
      return node.key;
    }
    return null;
  }
  // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
  search(key){
    return this.searchNode(this.root,key);
  }
  private searchNode(node,key){
    if(node === null){
      return null;
    }
    if(key < node.key){
      return this.searchNode(node.left,key);
    }else if(key > node.key){
      return this.searchNode(node.right,key);
    }else{
      return true;
    }
  }
  // 从树中移除某个键
  remove(key){
    this.root = this.removeNode(this.root,key);
  }
  private removeNode(node,key){
    if(node === null){
      return null;
    }
    if(key < node.key){
      node.left = this.removeNode(node.left,key);
      return node;
    }else if(key > node.key){
      node.right = this.removeNode(node.right,key);
      return node;
    }else{
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }
      if(node.left === null){
        node = node.right;
        return node;
      }else if(node.right === null){
        node = node.left;
        return node;
      }
      let aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right,aux.key);
      return node;
    }
  }
  private findMinNode(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node;
    }
    return null;
  }
}
