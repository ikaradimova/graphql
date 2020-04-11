export default `
    type User {
        _id: String!
        username: String!
        email: String!
        password: String!,
        firstname: String!,
        lastname: String!
    }

    type Query {
        user(_id: String!): User
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, firstname: String!, lastname: String!): User
        deleteUser(_id: String!): User
        editUser(_id: String!, username: String, email: String, password: String, firstname: String, lastname: String): User
    }
`