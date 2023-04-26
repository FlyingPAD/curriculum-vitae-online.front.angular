import { Component } from '@angular/core';
import { CvMenuService } from '../../cv-services/cv-menu.service';

@Component({
  selector: 'app-cv-home',
  templateUrl: './cv-home.component.html',
  styleUrls: ['./cv-home.component.scss']
})
export class CvHomeComponent 
{
  constructor(public menuService : CvMenuService) {}
}
