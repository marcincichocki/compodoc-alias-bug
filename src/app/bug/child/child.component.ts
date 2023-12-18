import { Component, Input } from "@angular/core";
// This import is not followed
import { LegacyParentComponent } from "../parent/index";
// But this import is
// import { LegacyParentComponent as ParentComponent } from "../parent/index";

@Component({
  template: "",
})
export class ChildComponent extends LegacyParentComponent {
  @Input() input1: string;
}
