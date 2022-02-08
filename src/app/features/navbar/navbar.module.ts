import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '../../shared/services/auth.service'
import { NavbarComponent } from './componets/navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, RouterModule],
  providers: [AuthService],
})
export class NavbarModule {}
