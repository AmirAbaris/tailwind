import { AbstractControl, ValidationErrors } from "@angular/forms";

export function notAllSpacesValidator(control: AbstractControl): ValidationErrors | null {
    const inputValue: string = control.value;
    const isAllSpaces: boolean = /^\s+$/.test(inputValue);

    return isAllSpaces ? { allSpaces: true } : null;
}

export const customValidators = {
    notAllSpaces: notAllSpacesValidator,
}