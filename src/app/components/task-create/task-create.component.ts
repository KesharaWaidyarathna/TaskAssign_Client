import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/models/task.model';
import { TeamMember } from 'src/app/models/teamMember.model';
import { TaskService } from 'src/app/service/task.service';
import { TeamMemberService } from 'src/app/service/team-member.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
newTask: task =new task();
teamMembers:TeamMember[]=[];
currentDate?: string;

constructor(private teamMemberService:TeamMemberService, private taskService:TaskService,private router:Router){

}

ngOnInit(): void {
  this.teamMemberService
  .getTeamMembers()
  .subscribe(({
    next:(response)=>{
      this.teamMembers=response;
    },error:(response)=>{
      console.log(response);
    }
  }));
  const today = new Date();
  this.currentDate = today.toISOString().substring(0, 10);
}

createTask(){
  this.newTask.teamMember.name = "No one";
  this.taskService.createTask(this.newTask).subscribe({
    next:(response)=>{
      if(response==true){
        this.router.navigate(['']);
      }
    },error:(response)=>{
      console.log(response);
    }
  })
}

}
