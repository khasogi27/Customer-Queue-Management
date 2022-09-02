import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputVisitorDetailsComponent } from './route/input-visitor-details/input-visitor-details.component';
import { MenuComponent } from './route/menu/menu.component';
import { RequestQueueNumberComponent } from './route/request-queue-number/request-queue-number.component';
import { TestcaseComponent } from './route/testcase/testcase.component';
import { VisitorListComponent } from './route/visitor-list/visitor-list.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      { path: '', redirectTo: 'test-case', pathMatch: 'full' },
      { path: 'request-queue-number', component: RequestQueueNumberComponent },
      { path: 'input_visitor_details', component: InputVisitorDetailsComponent },
      { path: 'visitor-list', component: VisitorListComponent },
      { path: 'test-case', component: TestcaseComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
