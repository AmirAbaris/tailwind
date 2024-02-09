import { TaskCardManagementCaptionModel } from "./task-card-management-caption.model";
import { TaskCountCaptionModel } from "./task-count-caption.model";
import { TaskEmptyCaptionModel } from "./task-input-caption.model";
import { TaskInputModel } from "./task.model";

export interface TaskManagementCaptionModel {
    taskEmptyCaption: TaskEmptyCaptionModel;
    taskCountCaption: TaskCountCaptionModel;
    taskCardManagement: TaskCardManagementCaptionModel;
}
