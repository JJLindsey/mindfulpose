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
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSubscription(meditations: [ID]!): Subscription
    updateUser(firstName: String!, lastName: String, email: String, password: String): User
}

`
//add this checkout back when ready line 25
// type Checkout {
//     session: ID
// }

//add this back to Queries line 44 when ready
//checkout(Meditations: [ID]!): Checkout

// add a deleteMeditation ability later on?
// Add a updateUser? to mutation 

//we can change the wording of order to subscription if we decide to change that up!--ryan
module.exports = typeDefs;