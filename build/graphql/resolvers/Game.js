"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Game = _interopRequireDefault(require("../../models/Game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Query: {
    game: function game(root, args) {
      return new Promise(function (resolve, reject) {
        _Game["default"].findOne(args).exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    },
    games: function games() {
      return new Promise(function (resolve, reject) {
        _Game["default"].find({}).populate().exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    }
  },
  Mutation: {
    addGame: function addGame(root, _ref) {
      var name = _ref.name,
          description = _ref.description,
          imageUrl = _ref.imageUrl,
          price = _ref.price;
      var newGame = new _Game["default"]({
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price
      });
      return new Promise(function (resolve, reject) {
        newGame.save(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    },
    deleteGame: function deleteGame(root, _ref2) {
      var _id = _ref2._id;
      return new Promise(function (resolve, reject) {
        _Game["default"].findByIdAndRemove({
          _id: _id
        }).exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    },
    editGame: function editGame(root, _ref3) {
      var _id = _ref3._id,
          name = _ref3.name,
          description = _ref3.description,
          imageUrl = _ref3.imageUrl,
          price = _ref3.price;
      return new Promise(function (resolve, reject) {
        _Game["default"].findByIdAndUpdate({
          _id: _id
        }, {
          $set: {
            name: name,
            description: description,
            imageUrl: imageUrl,
            price: price
          }
        }, {
          "new": true
        }).exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=Game.js.map