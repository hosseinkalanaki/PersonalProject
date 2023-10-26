import { Component, Input } from '@angular/core';
import { EducationModel } from 'src/app/models/Education-model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: EducationModel[];

}