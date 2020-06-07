define(["require", "exports", "./Node"], function (require, exports, Node_1) {
    "use strict";
    exports.__esModule = true;
    exports.BinarySearchTree = void 0;
    var BinarySearchTree = /** @class */ (function () {
        function BinarySearchTree() {
            this.root = null;
        }
        // 向树中插入一个新的键
        BinarySearchTree.prototype.insert = function (key) {
            var newNode = new Node_1["default"](key);
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
        // 通过中序遍历方式遍历所有节点
        BinarySearchTree.prototype.inOrderTraverse = function (callback) {
            this.inOrderTraverseNode(this.root, callback);
        };
        BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                this.inOrderTraverseNode(node.left, callback);
                callback(node.key);
                this.inOrderTraverseNode(node.right, callback);
            }
        };
        // 通过先序遍历方式遍历所有节点
        BinarySearchTree.prototype.preOrderTraverse = function (callback) {
            this.preOrderTraverseNode(this.root, callback);
        };
        BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                callback(node.key);
                this.preOrderTraverseNode(node.left, callback);
                this.preOrderTraverseNode(node.right, callback);
            }
        };
        // 通过后序遍历方式遍历所有节点
        BinarySearchTree.prototype.postOrderTraverse = function (callback) {
            this.postOrderTraverseNode(this.root, callback);
        };
        BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                this.postOrderTraverseNode(node.left, callback);
                this.postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        };
        // 返回树中最小的值/键
        BinarySearchTree.prototype.min = function () {
            return this.minNode(this.root);
        };
        BinarySearchTree.prototype.minNode = function (node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        };
        // 返回树中最大的值/键
        BinarySearchTree.prototype.max = function () {
            this.maxNode(this.root);
        };
        BinarySearchTree.prototype.maxNode = function (node) {
            if (node) {
                while (node && node.right !== null) {
                    node = node.right;
                }
                return node.key;
            }
            return null;
        };
        // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
        BinarySearchTree.prototype.search = function (key) {
            return this.searchNode(this.root, key);
        };
        BinarySearchTree.prototype.searchNode = function (node, key) {
            if (node === null) {
                return null;
            }
            if (key < node.key) {
                return this.searchNode(node.left, key);
            }
            else if (key > node.key) {
                return this.searchNode(node.right, key);
            }
            else {
                return true;
            }
        };
        // 从树中移除某个键
        BinarySearchTree.prototype.remove = function (key) {
            this.root = this.removeNode(this.root, key);
        };
        BinarySearchTree.prototype.removeNode = function (node, key) {
            if (node === null) {
                return null;
            }
            if (key < node.key) {
                node.left = this.removeNode(node.left, key);
                return node;
            }
            else if (key > node.key) {
                node.right = this.removeNode(node.right, key);
                return node;
            }
            else {
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                }
                else if (node.right === null) {
                    node = node.left;
                    return node;
                }
                var aux = this.findMinNode(node.right);
                node.key = aux.key;
                node.right = this.removeNode(node.right, aux.key);
                return node;
            }
        };
        BinarySearchTree.prototype.findMinNode = function (node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node;
            }
            return null;
        };
        return BinarySearchTree;
    }());
    exports.BinarySearchTree = BinarySearchTree;
});
