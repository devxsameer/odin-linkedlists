# 🔗 Linked List Implementation

Implementation of the **Linked List Project** from [The Odin Project](https://www.theodinproject.com/).  
This project focuses on building a **singly linked list** from scratch using JavaScript, implementing core methods, and exploring how dynamic data structures work under the hood.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Odin Project](https://img.shields.io/badge/Odin-Project-blue)

---

## 📚 Overview

A **linked list** is a linear data structure where elements (nodes) are connected via pointers (references). Unlike arrays, linked lists provide efficient insertions and deletions without shifting elements, but require sequential access to traverse.

In this project, I built a `LinkedList` class and a supporting `Node` class with methods for adding, removing, and searching nodes.

---

## 🛠 Features

- **Core Methods**

  - `append(value)` – Add a node at the end
  - `prepend(value)` – Add a node at the beginning
  - `size()` – Return the number of nodes (**number**)
  - `head()` – Return the first node (**Node | null**)
  - `tail()` – Return the last node (**Node | null**)
  - `at(index)` – Return the node at a given index (**Node | null**)
  - `pop()` – Remove the last node (**Node | null**)
  - `contains(value)` – Return `true` if the value exists
  - `find(value)` – Return the index of a given value (**number | null**)
  - `toString()` – Represent the list as a string  
    e.g. `(10) -> (20) -> (30) -> null`

- **Extra Methods**
  - `insertAt(value, index)` – Insert a node at a given index
  - `removeAt(index)` – Remove the node at a given index

---

## 📂 Project Structure

```plaintext
odin-linked-lists/
├── LinkedList.js   # LinkedList class
├── Node.js         # Node class
├── index.js        # Example usage
└── README.md

```

---

## 🚀 Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/<your-username>/linked-list.git
   cd linked-list
   ```

1. Run the example

   ```bash
   node index.js
   ```

---

## 🚀 Example Usage

```js
import LinkedList from "./LinkedList.js";

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);

console.log(list.toString());
// (5) -> (10) -> (15) -> (20) -> null

console.log(list.size()); // 4
console.log(list.find(20)); // 3
console.log(list.contains(15)); // true

list.removeAt(2);
console.log(list.toString());
// (5) -> (10) -> (20) -> null
```

---

## 🎯 Learning Outcomes

- Understanding nodes and pointers
- Practicing recursion and iteration for traversal
- Building a data structure without arrays
- Strengthening problem-solving and algorithmic thinking

---

## 📝 License

This project is part of [The Odin Project Curriculum](https://www.theodinproject.com/).
Built with ❤️ by `Sameer Ali`.
