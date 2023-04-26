import { Component } from '@angular/core';
import { CvMenuService } from '../../cv-services/cv-menu.service';

@Component({
  selector: 'app-cv-menu-toggle',
  templateUrl: './cv-menu-toggle.component.html',
  styleUrls: ['./cv-menu-toggle.component.scss']
})
export class CvMenuToggleComponent 
{
  constructor(public menuService : CvMenuService) {}
}
