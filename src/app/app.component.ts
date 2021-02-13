import { Component, OnInit } from '@angular/core';
import { Dataservice } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'codeProject';
  data:any;
  constructor(private http: Dataservice) {

  }
  ngOnInit(): void {
    console.log('test')
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.getData()
  }
  getData() {
    this.http.getAPI().subscribe(res => {
      this.data = res
     })
}
}
