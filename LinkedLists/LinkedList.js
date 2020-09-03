// The Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List Class where we define our methods for deleting, appending nodes and more!
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node, means we have a new header
  // and point with the new Header to the old Header which is now the first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    // Create a new Node
    let node = new Node(data);
    let current;

    // If the head is empty, create it
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // Loop through the Linked List till the end
      // and then just take the last Node and let it point to our new node
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at a specific index
  insertAt(data, index) {
    //  If index is out of range just return and do nothing
    if (index > 0 && index > this.size) {
      return;
    }

    // If the index is 0 we just have to insert a new header and use our method for this
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to header so we can loop through the Linked List
    current = this.head;
    let count = 0;

    // We loop through the Linked List till we reach our index
    while (count < index) {
      previous = current; // The Node before our index
      count++;
      current = current.next; // The Node after our index
    }

    // Insert it between the two nodes we declared in the While Loop
    node.next = current; // Our new Node has the Node AFTER our Index
    previous.next = node; // The Node BEFORE our Index has now our Node for the next pointer

    // Increase the size of the Linked List by one as we inserted one new node
    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // remove all from index to end
  removeAllFromIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let count = 0;

    // If Index 0 then delete all from head to end
    if (index == 0) {
      current.next = null;
      this.size = 1;
    } else {
      while (count < index) {
        count++;
        current = current.next;
      }

      current.next = null;

      this.size = this.size - index - 1;
    }
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print our Linked List
  printListData() {
    let current = this.head;

    // Loop through all nodes till current is not null
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    let current = this.head;
    let prev;

    while (current) {
      if (!current.next) {
        prev.next = null;
      }
      prev = current;
      current = current.next;
    }

    this.size--;
  }
}

// Lets test our Linked List!
const ll = new LinkedList();

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertAt(800, 1);

// Print the Linked List
ll.printListData();
