export default `
    type User {
        _id: String!
        firstname: String!
        lastname: String!
        email: String!
        password: String!
        userType: String!
    }

    type Query {
        user(_id: String!): User
        users: [User]
        currentUser: User
    }

    type Mutation {
        addUser(firstname: String!, lastname: String!, email: String!, password: String!, userType: String!): String
        login(email: String!, password: String!): String
        deleteUser(_id: String!): User
        editUser(_id: String!, firstname: String, lastname: String, password: String): User
    }
`