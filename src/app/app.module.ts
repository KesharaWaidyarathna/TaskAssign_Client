import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TeamMemberCreateComponent } from './components/teamMembers/team-member-create/team-member-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TeamMemberCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
