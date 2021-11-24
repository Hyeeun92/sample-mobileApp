import { Component, Input, OnInit } from '@angular/core';
import { Firestore, docData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.scss'],
})
export class EventdetailComponent implements OnInit {

  event: Event = null;
  id = null;

  constructor(private route: ActivatedRoute, private firestore: Firestore, private dataService: DataService) {

    // this.dataService.getEvents().subscribe(res => {
    //   this.events = res;
    // });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      console.log(params);
      this.id = params['id'].toString();
      // this.sendData(params['id']);

    });
    this.dataService.getEvetnById(this.id).subscribe(res => {
      this.event = res;

    });

  }
  // sendData(sendId) {
  //   const sendstring = sendId.toString();
  //   this.dataService.getEvetnById(sendstring).subscribe(res => {
  //     const event = res;
  //   });

}
