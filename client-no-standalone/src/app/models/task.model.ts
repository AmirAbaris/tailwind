export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface TaskInput {
    todoTasks: Task[];
    completedTasks: Task[];
}
