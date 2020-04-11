"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Query: {
    user: function user(root, args) {
      return new Promise(function (resolve, reject) {
        _User["default"].findOne(args).exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    },
    users: function users() {
      return new Promise(function (resolve, reject) {
        _User["default"].find({}).populate().exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    }
  },
  Mutation: {
    addUser: function addUser(root, _ref) {
      var username = _ref.username,
          email = _ref.email,
          password = _ref.password;
      var newUser = new _User["default"]({
        username: username,
        email: email,
        password: password
      });
      return new Promise(function (resolve, reject) {
        newUser.save(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    },
    deleteUser: function deleteUser(root, _ref2) {
      var _id = _ref2._id;
      return new Promise(function (resolve, reject) {
        _User["default"].findByIdAndRemove({
          _id: _id
        }).exec(function (error, response) {
          error ? reject(error) : resolve(response);
        });
      });
    },
    editUser: function editUser(root, _ref3) {
      var _id = _ref3._id,
          username = _ref3.username,
          email = _ref3.email,
          password = _ref3.password;
      return new Promise(function (resolve, reject) {
        _User["default"].findByIdAndUpdate({
          _id: _id
        }, {
          $set: {
            username: username,
            email: email,
            password: password
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
//# sourceMappingURL=User.js.map