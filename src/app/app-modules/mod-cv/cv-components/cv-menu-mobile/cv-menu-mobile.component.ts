import { Component, HostListener, Input } from '@angular/core';
import { CvMenuService } from '../../cv-services/cv-menu.service';

@Component({
  selector: 'app-cv-menu-mobile',
  templateUrl: './cv-menu-mobile.component.html',
  styleUrls: ['./cv-menu-mobile.component.scss']
})
export class CvMenuMobileComponent 
{
  // Properties :

  height : number

  // Constructor :

  constructor(public menuService : CvMenuService)
  {
    this.height = 0
  }

  // Methods

  @HostListener('window:scroll', [])
  onScroll() 
  {
    console.log(window.scrollY)

    this.height = window.scrollY
  }
}
