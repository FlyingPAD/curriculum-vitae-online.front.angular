import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvEducationComponent } from './cv-pages/cv-education/cv-education.component';
import { CvHomeComponent } from './cv-pages/cv-home/cv-home.component';
import { CvSkillsHardComponent } from './cv-pages/cv-skills-hard/cv-skills-hard.component';
import { CvSkillsSoftComponent } from './cv-pages/cv-skills-soft/cv-skills-soft.component';
import { CvProjectsComponent } from './cv-pages/cv-projects/cv-projects.component';
import { CvExperienceComponent } from './cv-pages/cv-experience/cv-experience.component';
import { NotFoundComponent } from './cv-pages/not-found/not-found.component';

const routes: Routes = 
[
  { path : '', component : CvHomeComponent },

  { path : 'training', component : CvEducationComponent },
  { path : 'experience', component : CvExperienceComponent },
  
  { path : 'hard-skills', component : CvSkillsHardComponent },
  { path : 'soft-skills', component : CvSkillsSoftComponent },

  { path : 'projects', component : CvProjectsComponent },

  { path : 'not-found', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModCvRoutingModule { }
