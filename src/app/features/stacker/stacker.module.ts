import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StackerService } from '../../shared/services/stacker.service'
import { StackerComponent } from './components/stacker/stacker.component'

import { StackerRoutingModule } from './stacker-routing.module'

@NgModule({
  declarations: [StackerComponent],
  imports: [CommonModule, StackerRoutingModule],
  providers: [StackerService],
})
export class StackerModule {}
