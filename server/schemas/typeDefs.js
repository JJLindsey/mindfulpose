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

type Order {
        _id: ID
        purchaseDate: String
        meditation: [Meditation]
    }

type Auth {
    token: ID!
    user: User
}

type Query {
    user: User
    categories: [Category]
    meditations(category: ID, title: String): [Meditation]
    meditation(_id: ID!): Meditation
    order(_id: ID!): Order
    checkout(Meditations: [ID]!): Checkout
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstNAme: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(meditations: [ID]!): Order
    updateUser(firstNAme: String!, lastName: String, email: String, password: String): User
    updateMeditation(_id: ID!, title: String): Meditation
}

`

module.exports = typeDefs;