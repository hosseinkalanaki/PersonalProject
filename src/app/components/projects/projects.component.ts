import { Component, Input } from '@angular/core';
import { ProjectsModel } from 'src/app/models/projects-model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  constructor() {
    this.dataModel=[];
  }

  @Input() dataModel: ProjectsModel[];

}