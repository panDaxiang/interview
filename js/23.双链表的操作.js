function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
  }

  remove(item) {
    let currentNode = this.find(item);
    if (currentNode.next !== null) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      currentNode.next = null;
      currentNode.prev = null;
    }
  }
}
