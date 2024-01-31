import { Task } from "./task.model";

export interface TodoTaskInput {
    todoTasks: Task[];
    searchTerm: string;
}
export interface CompletedTaskInput {
    completedTasks: Task[];
    searchTerm: string;
}