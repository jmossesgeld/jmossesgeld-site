---
title: "Implementing a Binary Search Tree in JavaScript"
date: "2022-05-05"
summary: "I am watching some video about binary search trees and I suddenly taught, 'Why don't I try implementing that in Javascript and see if I have learned anything?'. Hence, a challenge was accepted. This time, I will practice TDD or Test-Driven Development where I will write my failing tests first before wrting any functional code. For testing, I will use Jest in order to avoid having to constantly alt-tabbing to the browser."
category: "Article"
---

# 6:34 AM

## My simple test suite

```javascript
const BinaryTree = require("./binaryTree");

describe("Test Binary Tree", () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree(25);
    binaryTree.insert(12);
    binaryTree.insert(26);
    binaryTree.insert(14);
    binaryTree.insert(10);
  });

  it("can insert values like a binary search tree", () => {
    expect(binaryTree.traverse()).toEqual([10, 12, 14, 25, 26]);
  });

  it("can search from the tree", () => {
    expect(binaryTree.search(14).value).toBe(14);
  });
});
```

Took me almost an hour to finish. The hardest part for me was trying to traverse the tree in an in-order fashion. Here is the basic implementation I made:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  findNext(value, node) {
    if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.findNext(value, node.right);
      }
    } else {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.findNext(value, node.left);
      }
    }
  }

  insert(value) {
    this.findNext(value, this.root);
  }

  traverse() {
    const result = [];
    const previousNodes = [];
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.left) {
        previousNodes.push(currentNode);
        currentNode = currentNode.left;
      } else {
        result.push(currentNode.value);
        result.push(previousNodes[previousNodes.length - 1]?.value);
        currentNode = previousNodes.pop()?.right;
      }
    }
    return result;
  }

  search(value) {
    let currentNode = this.root;
    while (currentNode.value !== value) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return currentNode;
  }
}

module.exports = BinaryTree;
```

For finding the next slot to insert a node, I used recursion where if the left or right property is null, it will create a new Node, otherwise, it will call the function again with the left or right property as the new argument. The left or right option will be decided if the value is greater than or less than the `currentNode.value`

For traversing the tree in an in-order fashion, I used a while loop where as long as a currentNode has a left property, it will save the currentNode in an array that will be referenced later to detect remaining nodes and then traverse to the next node. If left property is null, it will add the `currentNode.value` to the result. The method will return the result after the while loop.

Now, it is time for me to check the solution if I did this right.
