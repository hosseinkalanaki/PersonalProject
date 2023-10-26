import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopInformationComponent } from './components/top-information/top-information.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule  } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LanguageComponent } from './components/language/language.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopInformationComponent,
    ProfileSummaryComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    LanguageComponent,
    CertificatesComponent,
    SocialMediaComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
