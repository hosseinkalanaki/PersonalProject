import { Component, Input } from '@angular/core';
import { SocialMediaModel } from 'src/app/models/social-media-model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})

export class SocialMediaComponent {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: SocialMediaModel[];

}