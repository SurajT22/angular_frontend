import { Routes } from "@angular/router";
// import { TestComponent } from "./test.component";
import { ListTestDetailsComponent } from "./components/list-test-details/list-test-details.component";

export const TEST_ROUTES: Routes = [
    {
      path: '',
      component: ListTestDetailsComponent,
    }
];