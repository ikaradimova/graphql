"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Game {\n        _id: String!\n        name: String!\n        description: String!\n        imageUrl: String!\n        price: Float!\n    }\n\n    type Query {\n        game(_id: String!): Game\n        games: [Game]\n    }\n\n    type Mutation {\n        addGame(name: String!, description: String!, imageUrl: String!, price: Float!): Game\n        deleteGame(_id: String!): Game\n        editGame(_id: String!, name: String, description: String, imageUrl: String, price: Float): Game\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=Game.js.map