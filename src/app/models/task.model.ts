import { TeamMember } from "./teamMember.model";

export class task {
    id=0;
    title="";
    discription="";
    startDate="";
    numberOfDays=0;
    completeDate="";
    teamMember:TeamMember=new TeamMember();
}