import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.css']
})
export class ContactezNousComponent implements OnInit {

  newClient : Client;

  constructor(private dataService: DataService, private http: HttpClient,) {
    this.newClient = new Client();
   }

  ngOnInit(): void {
  }
  
  postClient(){
    let data =
    {
      nom: this.newClient.nom,
      prenom: this.newClient.prenom,
      mail: this.newClient.mail
    }
    this.dataService.post('/clients',data)
    .then(
      (response:any) => {
        // console.log(response);
      },
      err => {
      }
    );
  }

}
