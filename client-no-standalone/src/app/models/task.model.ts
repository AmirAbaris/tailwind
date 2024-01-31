export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface AllTasks {
    todoTasks: Task[];
    completedTasks: Task[];
}
