/**
 * 树节点对象
 * 包括 key、left、right
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var TreeNode = /** @class */ (function () {
        function TreeNode(key) {
            this.left = null;
            this.right = null;
            this.key = key;
        }
        return TreeNode;
    }());
    exports["default"] = TreeNode;
});
