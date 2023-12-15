import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Traffic } from 'src/app/models/traffic';
import { TraficServiceService } from 'src/app/services/trafic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  governorates: string[] = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kébili',
    'Kef',
    'Mahdia',
    'Manouba',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan'
  ];

  traffic = new Traffic();
  severities : string[] = ["LOW", "MEDIUM", "HIGH"];

  listTraffics:Traffic[]=[]
  constructor(private trafficService:TraficServiceService){}

ngOnInit(): void {
  this.trafficService.getAllTraffic().subscribe(res=>{
    this.listTraffics=res;
    console.log(res);
  })
}

  submit(){
    
    this.trafficService.postTraffic(this.traffic).subscribe((res)=>{
      this.traffic=res;
      console.log(this.traffic);
      location.reload();
     
    })
  }

  selectedGouv : any; 
  date = new Date();
  listFiltred : any[] = []

  getTraficByGouv(gouv : any){
    this.trafficService.getTrafficByGouv(gouv).subscribe(res=> this.listFiltred=res);
  }

  onFiltredGouv(gouv: any){
    this.listFiltred=this.listTraffics.filter((e)=>e.gouv==gouv);
}
}