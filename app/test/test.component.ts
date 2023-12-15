import { Component, OnInit } from '@angular/core';
import { TraficServiceService } from '../services/trafic-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

     constructor(private testService : TraficServiceService){}

      ngOnInit(){
        this.testService.getAllTraffic().subscribe(res=> console.log(res));
      }
}
