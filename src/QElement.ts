export class QElement {
    private element: any;
    priority: any;
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }

    run() {
        console.log(`run job ${this.element}`);
    }
}
