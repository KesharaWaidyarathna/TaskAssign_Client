import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TeamMemberCreateComponent } from './components/teamMembers/team-member-create/team-member-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const routes: Routes = [
  {
    path:'',
    component:TasksComponent
  },
  {
    path:'task/create',
    component:TaskCreateComponent
  }
  ,
  {
    path:'task/member/create',
    component:TeamMemberCreateComponent
  }
  ,
  {
    path:'task/edit/:id',
    component:TaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
