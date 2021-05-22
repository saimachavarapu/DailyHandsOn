import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-management';
  count=10;
  name = 'sai';
  ngOnInit(): void {
    this.getFromChild(this.count);
  }
  getFromChild(event) {
    this.count=event;
  }
}

 
