import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SkillTagModule } from '../../shared/components/skill-tag/skill-tag.module'
import { StackerService } from '../../shared/services/stacker.service'
import { NavbarModule } from '../navbar/navbar.module'
import { StackerComponent } from './components/stacker/stacker.component'

import { StackerRoutingModule } from './stacker-routing.module'

@NgModule({
  declarations: [StackerComponent],
  imports: [CommonModule, StackerRoutingModule, SkillTagModule, NavbarModule],
  providers: [StackerService],
})
export class StackerModule {}
