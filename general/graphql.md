# GraphQL
[Source](https://www.howtographql.com/)

* [Introduction](#introduction)
* [Advantages of GraphQL](#advantages-of-graphql)
* [Core Concepts](#core-concepts)
* [Big Picture Architecture](#big-picture-architecture)

## Introduction
* GraphQL is a new API stndard that provides a more efficient, powerful, and flexible alternative to REST.
* Invented by Facebook

* More efficient alternative to REST
  * Increased mobile usage creates need for efficient data loading
  * Variety of different frontend frameworks and platforms on the client-side
  * Fast development speed & expectation for rapid feature development

* REST:
  * stateless servers
  * structured access to resources

* GraphQL cope with need for more flexibility and efficiency
  * A single endpoint
  * Send a POST request with a query included to specify what information is needed
  * root is called `data` and all information is nested under this object

## Advantages of GraphQL

### No more Over and Underfetching
 * **Overfetching**: downloading unnecessary data
 * **Underfetching**: endpoint doesn't return enought of the right information; need to send multiple requests (n+1 request problems)

### Rapid Prouct Iterations in the Frontend

 * With REST, changes made to the UI in the frontend will affect what data is needed and no longer necessary. The REST api's will have to be modified each time.

### Insightful Analytics on the Backend
* Each client specifies exactly what information is needed, allowing a better understanding of what data is beingused
* allows for low-level performance monitoring on requests that are processed by your server
* _resolver functions_ are used to collect data taht's requested by a client

### Benefits of a Schema & Type System
* GraphQL uses strong type system to define apabilities of an API
* Schema servers as contract between client and server
* Frontend and backend teams can work completely independently

## Core Concepts

### Schema Definition Language (SDL)
* SDL is the syntax used for writing schemas
* GraphQL has its own type system used to define the schema of an API

Example:
```
type Person {
  name: String!
  age: Int!
}

type Post {
  title: String!
}
```
* The `!` is used to indicate the field is _required_

**Relation**: a relationships between types

An example of a _one-to-many_ relationship:
```
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: Person!
}
```
* the posts field in Person is an array of posts

### Fetching Data with Queries
* The client specifies what data should be returned

#### Basic Querying

Example query:
```
{
  allPersons {
    name
  }
}
```
* `allPersons` is the _root field_ of the query.
* Everything following the root field is the _payload_

Example result of query:
```
{
  "allPersons": [
    { "name": "Johnny" },
    { "name": "Sarah" },
    { "name": "Alice" },
  ]
}
```

* GraphQL allows for querying of _nested_ information

#### Querying with Arguments
* Each _field_ can have 0 or more arguments specified in the _schema_
```
{
  allPersons(last: 2) {
    name
  }
}
```

### Writing Data with Mutations
* **mutations**: making changes to the data such as
  * creating new data
  * updating existing data
  * deleting existing data
* use the `mutation` keyword
```
mutation {
  createPerson(name: "Bob", age: 36) {
    name
    age
  }
}
```

* a mutation must also have a _root field_. In this case, it is `createPerson`
* specifying `name` and `age` inside the `createPerson` root field allows the information to be returned as well.

Example return query result:
```
"createPerson": {
  "name": "Bob",
  "age": 36,
}
```

* GraphQL types have unique `IDs` genereated by the server when the new objects are created.
```
type Person {
  id: ID!
  name: String!
  age: Int!
}
```

### Realtime Updates with Subscriptions
* **subscriptions**: clients can subscribe to an event. Whenever the event happens, the server pushes the corresponding data to the client
* subscriptions represent a _stream_ of data sent over to the client

example subscription:
```
subscription {
  newPerson {
    name
    age
  }
}
```

### Defining a Schem
* **schema**: specifies the capabilities of the API and defines how clients can request data
  * seen as a _contract_ between the server and the client

_root_ types (entry points):
```
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```

enabling `allPersons` query:
```
type Query {
  allPersons: [Person!]!
}
```

allPersons is a _root field_ of the API

enabling the last argument:
```
type Query {
  allPersons(last: Int): [Person!]!
}
```

`createPerson` mutation:
```
type Mutation {
  createPerson(name: String!, age: Int!): Person!
  updatePerson(id: ID!, name: String!, age: Int!): Person!
  deletePerson(id: ID!): Person!
}
```

`newPerson` subscription:
```
type Subscription {
  newPerson: Person!
}
```

## Big Picture Architecture
* GraphQL is only a _specification_ of how the GraphQL Servers hould be implemented:
 * what kind of requests it should accept
 * what the response format should look like
* The GraphQL Server can be built in any programming language of your choice
* [Graphcool](http://www.graph.cool/) proides a powerful GraphQL API out-of-box

### Uses Cases
1. GraphQL server with a connected database
2. GraphQL server to integrate existing system
3. A hybrid approach with a connected database and integration of existing system

#### GraphQL server with a connected database
* often used for _greenfield_ projects
* uses a single web server that implements GraphQL
* server resolves queries and constructs response with data that it fetches from the database
* GraphQL is _tranport-layer agnostic_
  * it can be used with any available network protocol (TCP, WebSockets, etc)
  * the database or data storage format is irrelevant. Both SQL or NoSQL implementations are ok.

#### GraphQL server to integrate existing system
* compelling for companies with legacy infrastuctures and many different APIs
* GraphQL can be used to unify existing systems and hide complexity of data fetching logic
* the server doesn't care about the what the data sources jare (databases, web services, 3rd party APIs,...)

#### A hybrid approach with a connected database and integration of existing system
* The two aforementioned approaches can be combined to build a GraphQL server that has a connected database but still talks to legacy or third-party systems
* When a query is received by the server, it will resolve it and either retrieve the required data from the connected database or some of the integrated APIs.

### Resolver Functions
* GraphQL queries/mutations consist of a set of fields
* GraphQL server has one resolver function per field
* the purpose of each resolver is to retrieve the data for its corresponding field

### GraphQL Clients
*good for frontend developers as data fetching complexity is pushed to the server side
* client doesn't care where data is coming from

#### From imperative to declarative data fetching

Imperative:
1. construct and send HTTP request (e.g. with `fetch` in JavaScript)
2. receive and parse server response
3. store data locally (either simply in memory or persistent)
4. display data in the UI

Declarative
1. Describe data requirements
2. Display information in the UI
