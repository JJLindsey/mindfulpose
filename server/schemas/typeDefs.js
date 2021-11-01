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

type Order {
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
    order(_id: ID!): Order
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(meditations: [ID]!): Order
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


module.exports = typeDefs;