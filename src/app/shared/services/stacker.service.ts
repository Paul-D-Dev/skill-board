import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { IStacker } from '../interfaces/stacker.interface'
import { Stacker } from '../models/stacker.model'

@Injectable()
export class StackerService {
  constructor(private http: HttpClient) {}

  getStackers(): Observable<IStacker[]> {
    const url = environment.apiURL + '/stackers'
    return this.http.get<IStacker[]>(url).pipe(
      map((stackers: IStacker[]) => {
        return stackers.map((s) => new Stacker(s))
      })
    )
  }
}
