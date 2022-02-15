import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { STACKERS } from '../../../../mock-test/db-data-stackers'
import { environment } from '../../../environments/environment'
import { IStacker } from '../interfaces/stacker.interface'

import { StackerService } from './stacker.service'

describe('StackerService', () => {
  let service: StackerService
  let httpTestingController: HttpTestingController
  const apiURL = environment.apiURL

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StackerService],
    })
    service = TestBed.inject(StackerService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should retrieve all stackers', () => {
    service.getStackers().subscribe((stackers: IStacker[]) => {
      expect(stackers).toBeTruthy('No stackers returned')
      expect(stackers.length).toBe(2, 'incorrect number of stackers')
      expect(stackers[0].firstname).toEqual(
        'Paul',
        'Not returned right firstname'
      )
    })

    const req = httpTestingController.expectOne(apiURL + '/stackers')
    expect(req.request.method).toEqual('GET')

    req.flush(STACKERS)
  })
})
