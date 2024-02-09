import { TaskCountCaptionModel } from "./task-count-caption.model";
import { TaskCountModel } from "./task-count.model";
import { TaskEmptyCaptionModel } from "./task-input-caption.model";
import { TaskInputModel } from "./task.model";

export interface TaskManagementCaptionModel {
    allTasks: TaskInputModel;
    taskCount: TaskCountModel;
    taskEmptyCaption: TaskEmptyCaptionModel;
    taskCountCaption: TaskCountCaptionModel;
}
