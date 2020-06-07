/**
 * 树节点对象
 * 包括 key、left、right
 */

class TreeNode {
  public key;
  public left = null;
  public right = null;
  constructor(key:any){
    this.key = key;
  }
}

export default TreeNode;