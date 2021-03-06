"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMMF = void 0;
var DMMF;
(function (DMMF) {
    let ModelAction;
    (function (ModelAction) {
        ModelAction["findUnique"] = "findUnique";
        ModelAction["findFirst"] = "findFirst";
        ModelAction["findMany"] = "findMany";
        ModelAction["create"] = "create";
        ModelAction["createMany"] = "createMany";
        ModelAction["update"] = "update";
        ModelAction["updateMany"] = "updateMany";
        ModelAction["upsert"] = "upsert";
        ModelAction["delete"] = "delete";
        ModelAction["deleteMany"] = "deleteMany";
        ModelAction["groupBy"] = "groupBy";
        // count = "count",
        ModelAction["aggregate"] = "aggregate";
    })(ModelAction = DMMF.ModelAction || (DMMF.ModelAction = {}));
})(DMMF = exports.DMMF || (exports.DMMF = {}));
//# sourceMappingURL=types.js.map