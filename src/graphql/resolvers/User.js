import User from '../../models/User';

export default {
    Query: {
        user: (root, args) => {
            return new Promise((resolve, reject) => {
                User.findOne(args).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        users: () => {
            return new Promise((resolve, reject) => {
                User.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }

    },
    Mutation: {
        addUser: (root, {username, email, password, firstname, lastname}) => {
            const newUser = new User({username, email, password, firstname, lastname});
            return new Promise((resolve, reject) => {
                newUser.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteUser: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                User.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        editUser: (root, {_id, username, email, password, firstname, lastname}) => {
            return new Promise((resolve, reject) => {
                User.findByIdAndUpdate({_id}, {$set: {username, email, password, firstname, lastname}}, {new: true})
                    .exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}