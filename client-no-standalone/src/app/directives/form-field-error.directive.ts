import { Directive, TemplateRef, ViewContainerRef, input } from '@angular/core';

@Directive({
  selector: '[formFieldErrorDir]'
})
export class FormFieldErrorDirective {
  //#region constructor
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  //#endregion

  //#region properties
  hadError = input.required<boolean | string>();
  errorKey = input.required<string>();
  //#endregion

  changes(): void {
    if (this.hadError()) {
      if (this.errorKey() && this.errorKey() === 'allSpaces') {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'Can not let that input' });
      }
      else {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'This field is required.' });
      }
    }
    else {
      this.viewContainer.clear();
    }
  }
}
