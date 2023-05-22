import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMember } from 'src/app/models/teamMember.model';
import { TeamMemberService } from 'src/app/service/team-member.service';

@Component({
  selector: 'app-team-member-create',
  templateUrl: './team-member-create.component.html',
  styleUrls: ['./team-member-create.component.css']
})
export class TeamMemberCreateComponent {

  newTeamMember:TeamMember=new TeamMember();

  constructor(private teamMemberService:TeamMemberService, private router:Router){

  }
  
  createTeamMember(){
    this.teamMemberService.createTeamMember(this.newTeamMember).subscribe({
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
