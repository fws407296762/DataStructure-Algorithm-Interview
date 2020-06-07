import Node from "./Node";

class LinkedList extends Node{
  private head:Node=null;
  private length:number = 0;

  constructor(){
    super(null)
  }
  //向列表尾部添加一个新的项
  append(element){
    let node = new Node(element),
        current;
    if(this.head === null){
      this.head = node;
    }else{
      current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  //向列表的特定位置插入一个新的项
  insert(position:number,element:any){
      if(position >= 0 && position <= this.length){
        let node = new Node(element),
            current = this.head,
            previous,
            index = 0;
        if(position === 0){
          node.next = current;
          this.head = node;
        }else{
          while (index++ < position){
            previous = current;
            current = current.next;
          }
          previous.next = node;
          node.next = current;
        }
        this.length++;
        return true;
      }else{
        return false;
      }
  }
  //从列表的特定位置移除一项
  removeAt(position){
    if(position > -1 && position < this.length){
      let current = this.head,
          previous,
          index = 0;
      if(position === 0){
        this.head = current.next;
      }else{
        if(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element
    }else{
      return -1;
    }
  }
  //从列表中移除一项
  remove(elemnt){
    let index = this.indexOf(elemnt);
    return this.removeAt(index);
  }
  ///返回元素在列表中的索引,如果列表中没有该元素则返回-1。
  indexOf(element){
    let current = this.head,
        index = -1;
    while (current){
      if(current.element === element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  //如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
  isEmpty(){
    return this.length === 0;
  }
  //返回链表包含的元素个数,与数组的length属性类似。
  size(){
    return this.length;
  }
  //由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值
  toString(){
    var current = this.head,
        string = '';
    while (current){
      string += "," + current.element;
      current = current.next;
    }
    return string.slice(1);
  }
  print(){}
}

export default LinkedList;