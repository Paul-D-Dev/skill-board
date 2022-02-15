import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { STACKERS } from '../../../../../mock-test/db-data-stackers.mock'

import { SkillTagComponent } from './skill-tag.component'

describe('SkillTagComponent', () => {
  let component: SkillTagComponent
  let fixture: ComponentFixture<SkillTagComponent>
  const stackers = STACKERS
  let el: DebugElement

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SkillTagComponent],
      })
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTagComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display data input', () => {
    component.skillsProps = stackers[0].skills
    fixture.detectChanges()

    const skillsTag = el.queryAll(By.css('.skill-tag'))
    expect(component.skillsProps.length).toEqual(
      skillsTag.length,
      'All skill do not display'
    )
    for (let i = 0; i < component.skillsProps.length; i++) {
      const nameSkill = skillsTag[i].nativeElement.innerText.trim()
      expect(component.skillsProps[i].trim()).toContain(
        nameSkill,
        'skill name is different'
      )
    }
  })
})
