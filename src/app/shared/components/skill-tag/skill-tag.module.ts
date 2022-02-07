import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SkillTagComponent } from './skill-tag.component'

@NgModule({
  declarations: [SkillTagComponent],
  exports: [SkillTagComponent],
  imports: [CommonModule],
})
export class SkillTagModule {}
