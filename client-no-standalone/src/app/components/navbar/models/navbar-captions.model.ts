import { ErrorCaptionModel } from "./error-caption.model";
import { NavbarMainCaptionModel } from "./navbar-main-caption.model";
import { TaskDialogCaptionModel } from "./task-dialog-caption.model";

export interface NavbarCaptionModel {
    navbarCaption: NavbarMainCaptionModel;
    taskDialogCaption: TaskDialogCaptionModel;
    errorCaption: ErrorCaptionModel;
}