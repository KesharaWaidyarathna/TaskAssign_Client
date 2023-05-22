import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviorment } from 'src/enviorments/enviorment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private url="holiday";
  constructor(private http:HttpClient) { }

  public getCompleteDate(date:string,Days:number):Observable<string>{
    return this.http.get<string>(`${enviorment.url}/${this.url}/calculateCompleteDate?stratDate=${date}&numberOfDays=${Days}`)

  }
}
