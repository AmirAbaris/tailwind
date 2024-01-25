import { Task } from "./task.model";

export interface TaskInput {
    todoTasks: Task[];
    completedTasks: Task[];
    searchTerm: string;
}