import { Component, OnInit } from '@angular/core'
import { IStacker } from '../../../../shared/interfaces/stacker.interface'
import { StackerService } from '../../../../shared/services/stacker.service'

@Component({
  selector: 'app-stacker',
  templateUrl: './stacker.component.html',
  styleUrls: ['./stacker.component.scss'],
})
export class StackerComponent implements OnInit {
  stackersList: IStacker[] = []
  constructor(private stackerService: StackerService) {}

  ngOnInit(): void {
    this.getStacker()
  }

  getStacker() {
    this.stackerService.getStackers().subscribe((stackers) => {
      console.log(stackers)
      this.stackersList = stackers
    })
  }
}
