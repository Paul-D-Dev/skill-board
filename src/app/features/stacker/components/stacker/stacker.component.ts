import { Component, OnInit } from '@angular/core'
import { IStacker } from '../../../../shared/interfaces/stacker.interface'
import { StackerService } from '../../../../shared/services/stacker.service'

@Component({
  selector: 'app-stacker',
  templateUrl: './stacker.component.html',
  styleUrls: ['./stacker.component.scss'],
})
export class StackerComponent implements OnInit {
  initialStateStackers: IStacker[] = []
  stackersList: IStacker[] = []
  filterListSkills: string[] = []
  skillToFilter: string[] = []
  constructor(private stackerService: StackerService) {}

  ngOnInit(): void {
    this.getStacker()
  }

  getStacker() {
    this.stackerService.getStackers().subscribe((stackers) => {
      console.log(stackers)
      this.initialStateStackers = this.stackersList = stackers
      this.setFilterSkillList(this.stackersList)
    })
  }

  setFilterSkillList(stackers: IStacker[]): void {
    // For each stacker push their skills
    for (const stacker of stackers) {
      this.filterListSkills.push(...stacker.skills)
    }

    // Remove duplicate
    this.filterListSkills = [...new Set(this.filterListSkills)]
  }

  setFilterSkills(skill: string): void {
    // Remove skill
    if (this.skillToFilter.includes(skill)) {
      const indexSkill = this.skillToFilter.indexOf(skill)
      this.skillToFilter.splice(indexSkill, 1)
    }
    // Add skill
    else {
      this.skillToFilter.push(skill)
    }

    this.filterSkills(this.skillToFilter)
  }

  filterSkills(skillsToFilter: string[]): void {
    this.stackersList = this.initialStateStackers.filter((stacker) => {
      return skillsToFilter.every((skill) => stacker.skills.includes(skill))
    })

    if (this.skillToFilter.length === 0) {
      this.stackersList = this.initialStateStackers
    }
  }

  resetFilter(): void {
    this.skillToFilter = []
    // Uncheck selected checkbox
    this.stackersList = this.initialStateStackers
  }
}
