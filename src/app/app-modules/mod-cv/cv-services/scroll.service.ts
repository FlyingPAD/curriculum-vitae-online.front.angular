import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService 
{
  // ----------------------------------------
  // - Properties :

  height : number

  // ----------------------------------------
  // - Constructor :

  constructor()
  {
    this.height = 0
  }

  // ----------------------------------------
  // - Methods

  @HostListener('window:scroll', [])  
  onScroll() 
  {
    console.log(window.scrollY)

    this.height = window.scrollY
  }
}
