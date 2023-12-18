import { NgModule } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@NgModule({
  declarations: [ChildComponent],
  exports: [ChildComponent],
  bootstrap: [ChildComponent],
})
export class BugModule {}
