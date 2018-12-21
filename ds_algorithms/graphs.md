# Graphs

˜- [Graphs](#graphs)
    - [Terminology](#terminology)
    - [Menger's Theorem](#mengers-theorem)
    - [Graph Representation](#graph-representation)
    - [Topological Sorting](#topological-sorting)
    - [Concept Checks](#concept-checks)˜

* Graphs have a set of **edges/links** and a set of **vertices/nodes**
* Graphs are used to formally represent a network, or a collection of interconnected objects

* Mathmetical definition: A graph G is an ordered pair of a set V of vertices and a set of E of edges.

>  G = (V, E)

* V is the set of nodes in the graph
* E is a set of pairs of vertices used to define the edges

* **Singleton Graph**: a graph with only one vertex

### Terminology
* **directed edge**: an edge that is directional, can only traverse from A to B and not the other way around
* **undirected edge**: the path between A and B is bidirectional

* **weighted edges**: The edge is assigned a value (weight). For example, a real world example would be roads connecting cities. The roads will have different lengths.

* **self loop**: an edge that points to the same vertex.
* **multiedge**: more than one edge connecting two vertices. For example, there could be multiple flights between two cities (verticies).

* **simple graphs**: no self loops or multiedges in the graph.

* **walk**: a sequence of vertices where each adjacent apir is connected by an edge
* **closed walk**: a walk that starts and ends at the same vertex

* **path (simple)**: a walk in which no verticies (and thus no edges) are repeated.
* **trail** a walkin which no edges are repeated

* **simple cycle**: starts and ends at the same vertex
* **acyclic graph**: a graph with no cycle


### Menger's Theorem
* In a finite graph, the size of minimum cut set is equal to the maximum number of disjoint paths that can be found between any pair of vertices

### Graph Representation
* A graph can be represented by a list of vertices and a list of edges. An edge list would consist of two vertices.

### Topological Sorting
* Sort vertices in a Directed Acyclic Graph (DAG) such that for ever directed edge uv, vertex u comes before v in the ordering.

### Concept Checks
* Give an example of various types of graphs (Weighted Undirected, Unweighted Directed, Unweighted Undirected, etc.)

Weighted Undirected: Roads connecting two cities
Unweighted Directed: Blocked friends.
Unweighted Undirected: Friendships
Weighted Directed: Flights of different costs.

* What is a simple graph? What attributes would make it not simple?

A simple graph is an unweighted, undirected graph with no graph loops or multiple loops. A simple graph can be connected or disconnected.

* What is the maximum number of edges in a directed simple graph? In a simple undirected graph.

Assuming the graph is simple and can only have edges to other nodes in the graph once and the graph has N vertices. The maximum number of edges from one vertex to other vertices would be N-1. Since there are N vertices. The total number of edges would be `N * ( N - 1 )`

For a simple undirected graph, the number of edges would be halved from a directed graph because an edge from A to B is also the same edge from B to A. `(N * ( N - 1 )) / 2`

* describe the levels of connectivity a graph can have (strongly connected, weakly connected).

**Connectivity** is how connected the graph is. It asks for the minimum number of elements (ndoes or edges) that need to be removed to disconnect the remaining nodes from each other.

**Weakly connected**: A directed graph where replacing all of its directed edges with undirected edges produces a connected (undirected) graph
**Strong connected**: A directed graph in which there is a path from any vertex to any other vertex
**connected**: A undirected graph in which all vertices are connected.

* What are cycles?

Cycles, in graphs, are graphs where a circular loop can be formed amongst a set of vertices through connected edges.

* What are some ways graphs are stored and traversed?

Directed graphs are represented as an **adjacency list** where each vertex v stores a list of a vertices for which there is an edge.

Graphs can be represented as an **adjacency matrix**, a two-dimensional array where A<sub>ij</sub> is non-zero when there is an edge (v<sub>i</sub>, v<sub>j</sub>).

Basic Graph Traversal: start from a node and find all edges accessible from the starting node. Mark nodes as visited and only find unvisited nodes to traverse. The set of vertices to explain can be maintained using a **Queue (BFS)** or a **stack (DFS)**.

