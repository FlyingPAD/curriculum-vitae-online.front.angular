import { Component, HostListener, Input } from '@angular/core';
import { CvMenuService } from '../../cv-services/cv-menu.service';

@Component({
  selector: 'app-cv-menu-mobile',
  templateUrl: './cv-menu-mobile.component.html',
  styleUrls: ['./cv-menu-mobile.component.scss']
})
export class CvMenuMobileComponent 
{
  // ----------------------------------------------------------------------
  // - Properties :

  windowHeight : number
  menuHeight : number
  topPosition : number
  pageHeight : number
  menuHalf : number // If menu > window

  // ----------------------------------------------------------------------
  // - Constructor :

  constructor(public menuService : CvMenuService)
  {
    this.pageHeight = 0
    this.menuHeight = 0
    this.windowHeight = 0
    this.topPosition = 15
    this.menuHalf = 0
  }

  // ----------------------------------------------------------------------
  // - Methods

  @HostListener('window:scroll', [])
  onScroll() 
  {
    this.windowHeight = window.innerHeight
    this.menuHeight = document.querySelector('#cv-menu-mobile')?.clientHeight || 0
    this.pageHeight = document.body.scrollHeight
    this.menuHalf = this.menuHeight - this.windowHeight

    console.log('-----------------------------------------')
    console.log(' - Page Height : ' + this.pageHeight)
    console.log(' - Menu Height : ' + this.menuHeight)
    console.log(' - Window Height : ' + this.windowHeight)
    console.log(' - Menu Top Position : ' + this.topPosition)
    console.log(' - Current Scroll Position : ' + window.scrollY)
    console.log(' - Menu Half : ' + this.menuHalf)

    // When scrolling Up :

    if(window.scrollY < this.topPosition - 75) 
    {
      if(window.scrollY <= 0 || window.scrollY < 50)
      {
        this.topPosition = 15
      }
      else this.topPosition = window.scrollY + 15
    }

    // When scrolling Down :

    if(this.menuHalf <= 0) // If Menu < Window
    {
      if(window.scrollY > this.topPosition + 150) // When Scrolling Down : 
      {
        if(window.scrollY > this.pageHeight - this.menuHeight )
        {
          this.topPosition = this.pageHeight - this.menuHeight - 15
        }
        else this.topPosition = window.scrollY + 15
      }
    }

    if(this.menuHalf > 0) // If Menu > Window
    { 
      if(window.scrollY > this.topPosition + this.menuHalf + 150) // When Scrolling Down : 
      {
        if(window.scrollY > this.pageHeight - this.menuHeight )
        {
          this.topPosition = this.pageHeight - this.menuHeight - 15
        }
        else this.topPosition = window.scrollY + 15
      }
    }
  }
}