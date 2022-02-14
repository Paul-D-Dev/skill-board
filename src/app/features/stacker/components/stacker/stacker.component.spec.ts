import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { of } from 'rxjs'
import { STACKERS } from '../../../../../../mock-test/db-data-stackers'
import { IStacker } from '../../../../shared/interfaces/stacker.interface'
import { StackerService } from '../../../../shared/services/stacker.service'
import { StackerModule } from '../../stacker.module'

import { StackerComponent } from './stacker.component'

fdescribe('StackerComponent', () => {
  let component: StackerComponent
  let fixture: ComponentFixture<StackerComponent>
  let stackerService: any
  let el: DebugElement
  const stackers = STACKERS

  beforeEach(
    waitForAsync(() => {
      const stackerServiceSpy = jasmine.createSpyObj('StackerService', [
        'getStackers',
      ])
      TestBed.configureTestingModule({
        imports: [StackerModule],
        declarations: [StackerComponent],
        providers: [{ provide: StackerService, useValue: stackerServiceSpy }],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(StackerComponent)
          component = fixture.componentInstance
          el = fixture.debugElement
          stackerService = TestBed.inject(StackerService)
        })
    })
  )

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return a collection of stackers', () => {
    component.stackersList = []
    stackerService.getStackers.and.returnValue(of(stackers))
    stackerService.getStackers().subscribe((res: IStacker[]) => {
      component.stackersList = res
    })

    expect(component.stackersList).toEqual(
      stackers,
      'stackersList is not as expected'
    )
  })

  it('should display stackers cards', () => {
    stackerService.getStackers.and.returnValue(of(stackers))
    fixture.detectChanges()
    const stackersCards = el.queryAll(By.css('.stackers__card'))
    expect(stackersCards.length).toBeGreaterThan(
      0,
      'Could not find stackers cards'
    )
  })

  it("should display first stacker's information", () => {
    component.stackersList = []
    stackerService.getStackers.and.returnValue(of(stackers))
    stackerService.getStackers().subscribe((res: IStacker[]) => {
      component.stackersList = res
    })

    const stacker = component.stackersList[0]

    fixture.detectChanges()
    // Firstname + Lastname
    const name: string[] = el
      .query(By.css('.stackers__card__header__identity h2'))
      .nativeElement.innerText.split(' ')
    expect(name[0]).toEqual(stacker.firstname, 'Not same firstname')
    expect(name[1]).toEqual(
      stacker.lastname.toUpperCase(),
      'Not same lastname & uppercase'
    )

    // PhotoUrl
    const imgSrc: string = el.query(By.css('.stackers__card__header__img img'))
      .nativeElement.src
    expect(imgSrc).toEqual(
      component.stackersList[0].photoUrl,
      'Not same photoUrl'
    )
  })

  // TODO render app-skill
  // TODO ng for
})
