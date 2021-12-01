import { PriorityQueue } from "./PriorityQueue";

export class JobRunner {
    priorityQueue;
    constructor(jobs) {
        this.priorityQueue = new PriorityQueue();
        this.setJobs(jobs);
    }

    getRandomPriority() {
        return Math.floor(Math.random() * (10000 - 1)) + 1;
    }

    setJobs(jobs) {
        jobs.forEach((job) => {
            this.priorityQueue.enqueue(job, this.getRandomPriority());
        })
    }

    run() {
        if (this.priorityQueue.isEmpty()) {
            return "No elements in Queue";
        }

        while (!this.priorityQueue.isEmpty()) {
            const item = this.priorityQueue.dequeue();
            item.run();
            this.priorityQueue.enqueue(item.element, this.getRandomPriority());
        }
    }

}
