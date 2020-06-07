/**
 * 树节点对象
 * 包括 key、left、right
 */
System.register("Node", [], function (exports_1, context_1) {
    "use strict";
    var Node;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {/**
             * 树节点对象
             * 包括 key、left、right
             */
            Node = /** @class */ (function () {
                function Node(key) {
                    this.left = null;
                    this.right = null;
                    this.key = key;
                }
                return Node;
            }());
            exports_1("default", Node);
        }
    };
});
System.register("BinarySearchTree", ["Node"], function (exports_2, context_2) {
    "use strict";
    var Node_1, BinarySearchTree;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Node_1_1) {
                Node_1 = Node_1_1;
            }
        ],
        execute: function () {
            BinarySearchTree = /** @class */ (function () {
                function BinarySearchTree() {
                    this.root = null;
                }
                // 向树中插入一个新的键
                BinarySearchTree.prototype.insert = function (key) {
                    var newNode = new Node_1.default(key);
                    if (this.root === null) {
                        this.root = newNode;
                    }
                    else {
                        this.insertNode(this.root, newNode);
                    }
                };
                BinarySearchTree.prototype.insertNode = function (node, newNode) {
                    if (newNode.key < node.key) {
                        if (node.left === null) {
                            node.left = newNode;
                        }
                        else {
                            this.insertNode(node.left, newNode);
                        }
                    }
                    else {
                        if (node.right === null) {
                            node.right = newNode;
                        }
                        else {
                            this.insertNode(node.right, newNode);
                        }
                    }
                };
                // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
                BinarySearchTree.prototype.search = function (key) { };
                // 通过中序遍历方式遍历所有节点
                BinarySearchTree.prototype.inOrderTraverse = function () { };
                // 通过先序遍历方式遍历所有节点
                BinarySearchTree.prototype.preOrderTraverse = function () { };
                // 通过后序遍历方式遍历所有节点
                BinarySearchTree.prototype.postOrderTraverse = function () { };
                // 返回树中最小的值/键
                BinarySearchTree.prototype.min = function () { };
                // 返回树中最大的值/键
                BinarySearchTree.prototype.max = function () { };
                // 从树中移除某个键
                BinarySearchTree.prototype.remove = function (key) { };
                return BinarySearchTree;
            }());
        }
    };
});
