"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _Game = _interopRequireDefault(require("./Game"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolvers = [_Game["default"], _User["default"]];

var _default = (0, _mergeGraphqlSchemas.mergeResolvers)(resolvers);

exports["default"] = _default;
//# sourceMappingURL=index.js.map