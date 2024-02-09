export interface TaskModel {
    id: string;
    title: string;
    completed: boolean;
}

export interface AllTasksModel {
    todoTasks: TaskModel[];
    completedTasks: TaskModel[];
}
