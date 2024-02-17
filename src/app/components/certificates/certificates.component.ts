import { Component, Input } from '@angular/core';
import { CertificateModel } from 'src/app/models/certificate-model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})

export class CertificatesComponent {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: CertificateModel[];

}