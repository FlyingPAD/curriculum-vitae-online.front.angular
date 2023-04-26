import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModCvRoutingModule } from './mod-cv-routing.module';
import { CvHomeComponent } from './cv-pages/cv-home/cv-home.component';
import { CvEducationComponent } from './cv-pages/cv-education/cv-education.component';
import { CvSkillsSoftComponent } from './cv-pages/cv-skills-soft/cv-skills-soft.component';
import { CvSkillsHardComponent } from './cv-pages/cv-skills-hard/cv-skills-hard.component';
import { NotFoundComponent } from './cv-pages/not-found/not-found.component';
import { CvMenuMobileComponent } from './cv-components/cv-menu-mobile/cv-menu-mobile.component';
import { CvMenuDesktopComponent } from './cv-components/cv-menu-desktop/cv-menu-desktop.component';
import { CvProjectsComponent } from './cv-pages/cv-projects/cv-projects.component';
import { CvExperienceComponent } from './cv-pages/cv-experience/cv-experience.component';
import { CvMenuToggleComponent } from './cv-components/cv-menu-toggle/cv-menu-toggle.component';


@NgModule({
  declarations: [
    CvHomeComponent,
    CvEducationComponent,
    CvSkillsSoftComponent,
    CvSkillsHardComponent,
    NotFoundComponent,
    CvMenuMobileComponent,
    CvMenuDesktopComponent,
    CvProjectsComponent,
    CvExperienceComponent,
    CvMenuToggleComponent,
  ],
  imports: [
    CommonModule,
    ModCvRoutingModule
  ]
})
export class ModCvModule { }
