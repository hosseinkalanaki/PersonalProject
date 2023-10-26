import { Component, Input } from '@angular/core';
import { LanguageModel } from 'src/app/models/language-model';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent {

  constructor() {
    this.dataModel='';
  }

  @Input() dataModel: string;

}