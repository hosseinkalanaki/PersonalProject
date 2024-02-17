import { Component, Input } from '@angular/core';
import { PersonalInformationModel } from 'src/app/models/personal-information-model';
import { SkillModel } from 'src/app/models/skill-model';

@Component({
  selector: 'app-top-information',
  templateUrl: './top-information.component.html',
  styleUrls: ['./top-information.component.css']
})

export class TopInformationComponent {

  constructor() {
    this.dataModel=new PersonalInformationModel();
  }

  @Input() dataModel: PersonalInformationModel;

}