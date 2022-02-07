import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StackerComponent } from './components/stacker/stacker.component'

const routes: Routes = [
  {
    path: '',
    component: StackerComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StackerRoutingModule {}
