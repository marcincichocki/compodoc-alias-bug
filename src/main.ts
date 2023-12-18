import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BugModule } from "./app/bug/bug.module";

platformBrowserDynamic()
  .bootstrapModule(BugModule)
  .catch((err) => console.error(err));
