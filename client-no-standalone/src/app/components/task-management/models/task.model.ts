export interface TaskModel {
    id: string;
    title: string;
    completed: boolean;
}

export interface TaskInputModel {
    todoTasks: TaskModel[];
    completedTasks: TaskModel[];
}
