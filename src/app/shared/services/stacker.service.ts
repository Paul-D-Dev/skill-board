import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { IStacker } from '../interfaces/stacker.interface'

@Injectable({
  providedIn: 'root',
})
export class StackerService {
  constructor(private http: HttpClient) {}

  getStackers(): Observable<IStacker[]> {
    const url = environment.apiURL + '/stackers'
    return this.http.get<IStacker[]>(url)
  }
}
