# REST

[Reference](https://codewords.recurse.com/issues/five/what-restful-actually-means)

* REST stands for Representational State Transfer.

## Fielding Constraints
  * Client-Server: network must be made up of clients and servers
    * Server: computer that has resources of interest
    * Client: computer that wants to interact with resources stored on the server
  * Event-based Integration: Non-RESTful alternative
    * No one-to-one communication
    * Only broadcasting and eavesdropping.

### **Stateless**
Clients and servers do not have state

### **Uniform interface**
Ensures that there is a common langauage between servers and clients

4 sub-constraints
  * identification of resources
  * manipulation of resources through representations
  * self-descriptive messages
  * hypermedia

#### Identification of Resources

* Each resoures must be uniquely identified by a stable identifier
* Resources could be anything: HTML document, image, information about a particular user

#### Manipulation of Resources through Representations

* Send represetnations from client to server, usually as a JSON object
* Server has full control of resources and responsible for making changes
* Client makes changes by sending server what the resulting resource should look like

#### Self-descriptive Messages

* Message should contain all the information the request needs to understand it

#### Hypermedia

* data sent from server to client should contain information about what the client can do next

#### Other Fielding Constraints

* **Caching**: server responses should be labelled as either cacheable or non-cacheable
* **Layered System**: refers to the fact that there can be more components tan just servers and clients
* **Code on Demand**: ability for server to send executable code to the client
  * only optional constraint