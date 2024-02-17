import { Component, Input } from '@angular/core';
import { SkillModel } from 'src/app/models/skill-model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})

export class SkillsComponent  {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: SkillModel[];

}