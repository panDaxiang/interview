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
  insert(newElement, item) {
    let currentNode = this.find(item);
    let newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  display() {
    let current = this.head;
    while (current.next !== null) {
      console.log(current.next.element);
      current = current.next;
    }
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
list.remove("apple");
list.display();
