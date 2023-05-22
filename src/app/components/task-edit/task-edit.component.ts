import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { task } from 'src/app/models/task.model';
import { TeamMember } from 'src/app/models/teamMember.model';
import { HolidayService } from 'src/app/service/holiday.service';
import { TaskService } from 'src/app/service/task.service';
import { TeamMemberService } from 'src/app/service/team-member.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  editTask=new task();
  teamMembers:TeamMember[]=[];
  currentDate?: string;
  completedate="";
  
  constructor(private teamMemberService:TeamMemberService,private aRoute:ActivatedRoute,private taskService:TaskService, private holidayService:HolidayService,
    private router:Router){

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

  this.aRoute.paramMap.subscribe({
    next:(params)=>{
      const id= params.get('id');
      if(id){
        this.taskService.getTask(Number(id)).subscribe({
          next:(response)=>{
            if(response){
              this.editTask=response;
              if(this.editTask.numberOfDays>0){
                this.completedate=this.editTask.completeDate;
              }
            }
          }
        })
      }
    }
  })

}


  updateTask(){
    this.editTask.completeDate=this.completedate;
    this.taskService.updateTask(this.editTask).subscribe({
      next:(response)=>{
        if(response==true){
          this.router.navigate(['']);
        }
      },error:(response)=>{
        console.log(response);
      }
    })

  }

   calculateCompleteDate(date:string,days:number){
    debugger
    if(date!='' && days>0){
      this.holidayService.getCompleteDate(date,days).subscribe({
        next:(response: any)=>{
          if(response){
            this.completedate=response;
          }
        }
      })
    }else{
      this.completedate="";
    }
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe({
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
