function Node(element) {
  this.element = element;
  this.next = null;
}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  findPrev(item){
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.next.element !== item){
      currentNode = currentNode.next
    }
    console.log(currentNode.element);
  }
  insertHead(item){
    let newElement = new Node(item)
    newElement.next = this.head 
    this.head = newElement
  }
  insert(newElement, item) {
    let currentNode = this.find(item);
    let newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  display() {
    let list = []
    let current = this.head;
    list.push(current.element)
    while (current.next !== null) {
      list.push(current.next.element);
      current = current.next;
    }
    console.log(list);
  }
  remove(item) {
    let removeNode = this.find(item);
    let nextNode = removeNode.next;
    removeNode.element = nextNode.element;
    removeNode.next = nextNode.next;
  }
}

const list = new LList();
list.insert("apple", "head");
list.insert("banana", "apple");
list.insert("pear", "banana");
list.insertHead('one')
// list.remove("apple");
list.display();

list.findPrev('head')
