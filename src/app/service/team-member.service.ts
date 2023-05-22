import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TeamMember } from '../models/teamMember.model';
import { enviorment } from 'src/enviorments/enviorment';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  private url="teamMember";
  constructor(private http:HttpClient) { }

  public getTeamMembers() : Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(`${enviorment.url}/${this.url}/GetTeamMembers`)
  }

  public createTeamMember(teamMember: TeamMember){
    return this.http.post(`${enviorment.url}/${this.url}/CreateTeamMember`,teamMember);
  }
}
