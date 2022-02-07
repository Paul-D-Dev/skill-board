import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-skill-tag',
  templateUrl: './skill-tag.component.html',
  styleUrls: ['./skill-tag.component.scss'],
})
export class SkillTagComponent implements OnInit {
  @Input('skills') skillsProps: string[] = ['']

  constructor() {}

  ngOnInit() {
    const widthPage = window.innerWidth
    if (widthPage < 640 && this.skillsProps.length > 1) {
      this.skillsProps = this.nbTagsOnMobile(this.skillsProps)
    }
  }

  nbTagsOnMobile(tags: string[]): string[] {
    const nbRestTags = tags.length - 1
    return [tags[0], '+ ' + nbRestTags.toString()]
  }
}
