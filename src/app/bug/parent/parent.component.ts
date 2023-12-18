import { Directive, Input } from "@angular/core";

@Directive()
export class ParentComponent {
  @Input() input2: string;
}
