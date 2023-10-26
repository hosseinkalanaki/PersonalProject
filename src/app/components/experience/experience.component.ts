import { Component, Input } from '@angular/core';
import { ExperienceModel } from 'src/app/models/experience-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: ExperienceModel[];

}