# Dijkstra's algorithm

Edsger W. Dijkstra, a Dutch computer scientist, invented Dijkstra's algorithm in 1956. The algorithm is used to find the shortest path between two nodes in a graph.

Dijkstra's algorithm is a shortest-path algorithm that finds the shortest path between nodes in a graph. It is used in various applications such as computer networks, transportation networks, and social networks . The algorithm was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later. The algorithm is based on the greedy approach and works by finding the shortest path from a source node to all other nodes in the graph .
```
DIJKSTRA( a,b,c,d) {
Initialize_single_source(a,b)
c<-- fi
Q<-- V # insert all the vertices into Q
while Q not equal to fi
do u<--extract_min(Q)
S<--S union {u}
for each vertex a belongs to abj{u}
do relax
}
 
 Initialize_single_source(G,S)
{
 for each vertex v belongs to a[G]
do d[a]<-- infinite
[a]<--nil
d[S]<--0
}
relax(a,b,c)
{
 if d[a]> d[u]+ w(u,a)
then d[a]<-- d[u]+ b(u,v)
}
[a]<--u
have two set of vertices
```
Record the path of the  given block diagram


source v =0
step1: visit from the vertex v  to the neighbour node w and s. v to w is 6 and visited now and v to s is 7 both are relaxed .

step2: visit from the vertex w which is already visited and the only neighbor v is relaxed as it was visited.

step 3: Vertex s neighbor vertex are t and u. visit from s to t will be 17 and visiting from s to u will be 12.

step 4: vertex u neighbor vertex are t, w and v . All were visited in previous step. So they are relaxed

Record the shortest path from the vertex v

the  minimum distance from v = 0
the  minimum distance from v to w = 6 v->w
the  minimum distance from v to s= 7 v->s
the  minimum distance from v to u= 12  v->s->u
the  minimum distance from v to t= 5  v->s->u->t

Here are some additional facts about Dijkstra's algorithm:

- The algorithm can be used for both directed and undirected graphs.
- It can handle negative edge weights but not negative cycles.
- The time complexity of the algorithm is O(E log V), where E is the number of edges and V is the number of vertices in the graph .

Example:

Dijkstra's algorithm is a shortest-path algorithm that finds the shortest path between nodes in a graph. Here is an example of how Dijkstra's algorithm works:

Suppose we have a graph with nodes A, B, C, D, E and F. The edges between the nodes have weights as shown below:

```
A --5-- B --2-- C
|      |      |
3      4      1
|      |      |
D --6-- E --4-- F
```

We want to find the shortest path from node A to node F. Here is how Dijkstra's algorithm works:

1. Assign a tentative distance value to every node: set it to zero for our initial node and to infinity for all other nodes.
2. Set the initial node as current.
3. For the current node, consider all of its neighbors and calculate their tentative distances. The tentative distance is the distance from the initial node to the neighbor through the current node.
4. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.
5. When we are done considering all of the neighbors of the current node, mark the current node as visited.
6. Select the unvisited node that is marked with the smallest tentative distance and set it as the new current node then go back to step 3.

By following these steps, we can find that the shortest path from A to F is A -> B -> C -> F with a total weight of 8.

# Python Program
```python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = [(0, start)]
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if current_distance > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))
    return distances

graph = {
    'A': {'B': 2, 'C': 1},
    'B': {'A': 1, 'C': 3},
    'C': {'A': 4, 'B': 2}
}

print(dijkstra(graph, 'A'))
```

# Dijasstra Algorithem Uses:

**Dijkstra's algorithm** is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights, producing a shortest path tree . It is used in many applications such as road networks, airline networks, computer networks, and many more . It is also used in routing protocols such as OSPF (Open Shortest Path First) and IS-IS (Intermediate System to Intermediate System).  

# Time Complexity

Dijkstra's algorithm has a time complexity of **O(E log V)** where **E** is the number of edges and **V** is the number of vertices in the graph . This is because Dijkstra's algorithm uses a priority queue to store the vertices that have been visited but not yet processed. The priority queue is implemented using a binary heap or a Fibonacci heap, which takes **O(log V)** time to insert and delete elements . The algorithm visits each vertex once and each edge once, so the total time complexity is **O(E log V)** 

# Application

Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights. It is used in many applications such as road networks, airline networks, computer networks, and social networks. Here are some examples of how Dijkstra's algorithm is used in different fields:

1. **Routing protocols**: Dijkstra's algorithm is used in routing protocols such as OSPF (Open Shortest Path First) and IS-IS (Intermediate System to Intermediate System) to find the shortest path between two nodes in a network .
2. **Transportation networks**: Dijkstra's algorithm is used in transportation networks such as road networks and airline networks to find the shortest path between two locations .
3. **Computer networks**: Dijkstra's algorithm is used in computer networks to find the shortest path between two nodes in a network .
4. **Social networks**: Dijkstra's algorithm is used in social networks to find the shortest path between two people or groups of people.
