const { gql } = require('apollo-server');

const typeDefs = gql`

type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

type Meditations {
    _id: ID
    title: String
    img: String
    recording: String
}

type Category {
    _id: ID
    name: String
}

type Checkout {
    session: ID
}

type Auth {
    token: ID!
    user: User
}

`

module.exports = typeDefs;