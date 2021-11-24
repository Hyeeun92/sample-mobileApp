import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{

  events = [];
  
  constructor(private dataService: DataService) {
    this.dataService.getEvents().subscribe(res => {
      this.events = res;
    });
    

  }

}
