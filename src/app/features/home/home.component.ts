import {Component, OnInit} from '@angular/core';
import {Observable } from "rxjs";
import {DataInterface} from "../../services/data.interface";
import {AwesomeService} from "../../services/awesome.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts$?: Observable<DataInterface[]>;

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.posts$ = this.awesomeService.getPosts$();
  }
}
