import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonData } from './models/json-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  title = 'Kalanaki';

  public dataModel!: JsonData;

  public ngOnInit(): void { 
    this.http.get('https://hosseinkalanaki.github.io/PersonalProject/assets/json/data.json').subscribe((response) => {
      this.dataModel = response as JsonData;
    });    
  }
}
