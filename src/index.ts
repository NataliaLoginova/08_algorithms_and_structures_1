const priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());
console.log(priorityQueue.front());

priorityQueue.enqueue("Job 1", 2);
priorityQueue.enqueue("Job 2", 1);
priorityQueue.enqueue("Job 3", 1);
priorityQueue.enqueue("Job 4", 2);
priorityQueue.enqueue("Job 5", 3);

console.log(priorityQueue.printPQueue());

console.log(priorityQueue.front().element);

console.log(priorityQueue.rear().element);

console.log(priorityQueue.dequeue().element);

priorityQueue.enqueue("Job 6", 2);

console.log(priorityQueue.printPQueue());
