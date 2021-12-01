const priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());
console.log(priorityQueue.front());

priorityQueue.enqueue("Job 1", 2);
priorityQueue.enqueue("Job 2", 1);
priorityQueue.enqueue("Job 3", 1);

console.log(priorityQueue.printPQueue());

console.log(priorityQueue.front().element);

console.log(priorityQueue.rear().element);

const jobRunner = new JobRunner(['Job 1', 'Job 2', 'Job 3']);

jobRunner.run();
