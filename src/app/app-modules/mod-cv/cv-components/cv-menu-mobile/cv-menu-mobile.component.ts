import { Component } from '@angular/core';
import { CvMenuService } from '../../cv-services/cv-menu.service';

@Component({
  selector: 'app-cv-menu-mobile',
  templateUrl: './cv-menu-mobile.component.html',
  styleUrls: ['./cv-menu-mobile.component.scss']
})
export class CvMenuMobileComponent 
{
  constructor(public menuService : CvMenuService) {}
}
