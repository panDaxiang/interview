/* 
  function ListNode(x){
    this.val = x
    this.next = null
  }
*/

function Node(element){
  this.element = element
  this.next = null
}

class LList{
  constructor(){
    this.head = new Node('head')
  }

  printListFromTailToHead(){
    const arr = [];
    let currentNode = this.head
    while(currentNode.next !== null){
      arr.unshift(currentNode.element)
      currentNode = currentNode.next
    }
    console.log(arr);
    return arr
  }
}

const list = new LList()
list.printListFromTailToHead()
