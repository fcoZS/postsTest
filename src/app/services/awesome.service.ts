import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataInterface} from "./data.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private httpClient: HttpClient) { }

  getPosts$(): Observable<DataInterface[]> {
    return this.httpClient.get<DataInterface[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
