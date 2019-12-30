function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display
  this.remove = remove
}

function find(item) {
  let currentNode = this.head;
  while (item !== currentNode.element) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currentNode = this.find(item);
  newNode.next = currentNode.next;
  currentNode.next = newNode;
}

function display(){
  let current = this.head
  while(current.next !== null){
    console.log(current.next.element);
    current = current.next
  }
}

function remove(item){
  var currentNode = this.find(item)
  let nextNode = currentNode.next
  currentNode.element = nextNode.element
  currentNode.next = nextNode.next
}

var fruits = new LList();
fruits.insert('apple', 'head')
fruits.insert('pear', 'apple')
fruits.insert('banana', 'pear')
fruits.remove('apple')
fruits.display()
