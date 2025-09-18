import Node from "./Node.js";

// LinkedList class implements a singly linked list data structure.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // --- Basic utilities ---

  //Returns the total number of nodes in the list
  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.nextNode;
    }
    return count;
  }

  // Returns the last node (tail) of the list
  tail() {
    if (!this.head) return null;
    let curr = this.head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    return curr;
  }

  // Returns the node at a specific index (0-based)
  at(index) {
    if (this.size() < index + 1) return null;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.nextNode;
    }
    return curr;
  }

  // --- Insertion methods ---

  // Adds a new node with the given value at the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    curr.nextNode = newNode;
  }

  // Adds a new node with the given value at the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // Inserts a new node with the given value at the specified index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.size()) {
      this.append(value);
      return;
    }

    let prev = this.head;
    let curr = this.head.nextNode;
    let i = 1;

    while (i < index) {
      prev = curr;
      curr = curr.nextNode;
      i++;
    }

    const newNode = new Node(value);
    prev.nextNode = newNode;
    newNode.nextNode = curr;
  }

  // --- Removal methods ---

  // Removes and returns the last node from the list
  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      const node = this.head;
      this.head = null;
      return node;
    }

    let prev = this.head;
    let curr = this.head.nextNode;

    while (curr.nextNode) {
      prev = curr;
      curr = curr.nextNode;
    }

    prev.nextNode = null;
    return curr;
  }
  // Removes the node at the specified index
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    if (index >= this.size()) return;

    let prev = this.head;
    let curr = this.head.nextNode;
    let i = 1;

    while (i < index) {
      prev = curr;
      curr = curr.nextNode;
      i++;
    }
    prev.nextNode = curr.nextNode;
  }

  // --- Search methods ---

  // Returns true if the list contains a node with the given value
  contains(value) {
    return this.find(value) !== null;
  }

  // Returns the index of the first node containing the value, or null if not found
  find(value) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.data === value) {
        return index;
      }
      index++;
      curr = curr.nextNode;
    }
    return null;
  }

  // --- Utility methods ---

  // Returns a string representation of the list
  toString() {
    let result = "";
    let curr = this.head;
    while (curr) {
      result += `(${curr.data}) -> `;
      curr = curr.nextNode;
    }
    return result + "null";
  }
}

export default LinkedList;
