import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { interval } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  secondes: number

  ngOnInit() {
    interval(1000).subscribe(
      value => {
        this.secondes = value
      },
      error => {
        console.log('Uh-oh, an error occurred! : ' + error)
      },
      () => {
        console.log('Observable complete!')
      }
    )
  }
}
