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

type Subscription {
        _id: ID
        purchaseDate: String
        meditation: [Meditations]
    }

type Auth {
    token: ID!
    user: User
}

type Query {
    user: User
    categories: [Category]
    meditations(category: ID, title: String): [Meditations]
    meditation(_id: ID!): Meditations
    subscription(_id: ID!): Subscription
    checkout(Meditations: [ID]!): Checkout
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSubscription(meditations: [ID]!): Subscription
    updateUser(firstName: String!, lastName: String, email: String, password: String): User
    updateMeditation(_id: ID!, title: String): Meditations
}

`
//we can change the wording of order to subscription if we decide to change that up!--ryan
module.exports = typeDefs;