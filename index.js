import LinkedList from "./LinkedList.js";

// Create a new linked list
const list = new LinkedList();

console.log("🚀 Creating Linked List...");

// --- Insertion tests ---
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("tiger"); // goes to front
list.insertAt("hamster", 2); // insert in middle
list.insertAt("snake", 99); // index too big -> append

console.log("📋 After insertions:");
console.log(list.toString()); // (tiger) -> (dog) -> (hamster) -> (cat) -> (parrot) -> (snake) -> null

// --- Size, head, tail ---
console.log("\n📏 List size:", list.size());
console.log("🏁 Head:", list.head.data);
console.log("🔚 Tail:", list.tail().data);

// --- Access specific node ---
console.log("\n🐦 Node at index 2:", list.at(2)?.data); // hamster
console.log("🐢 Node at index 10 (out of range):", list.at(10)); // null

// --- Search methods ---
console.log("\n🔎 Contains 'cat'?", list.contains("cat"));
console.log("🔎 Contains 'lion'?", list.contains("lion"));
console.log("📍 Index of 'snake':", list.find("snake"));
console.log("📍 Index of 'lion':", list.find("lion"));

// --- Removal methods ---
console.log("\n❌ Removing last node (pop):", list.pop()?.data);
console.log("📋 After pop:", list.toString());

list.removeAt(2);
console.log("❌ Removed node at index 2");
console.log("📋 After removeAt:", list.toString());

list.removeAt(0);
console.log("❌ Removed head node");
console.log("📋 After removeAt(0):", list.toString());

console.log("\n✅ Final List:");
console.log(list.toString());
