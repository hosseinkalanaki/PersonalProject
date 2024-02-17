import { Component, Input } from '@angular/core';
import { LanguageModel } from 'src/app/models/language-model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: LanguageModel[];

}