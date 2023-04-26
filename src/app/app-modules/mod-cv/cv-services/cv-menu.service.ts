import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvMenuService 
{
  // ------------------------------------------------
  // - Properties :

  menuIsActive : boolean

  // ------------------------------------------------
  // - Constructor :

  constructor() { this.menuIsActive = false }

  // ------------------------------------------------
  // - Methods :

  menuTrigger()
  {
    this.menuIsActive = !this.menuIsActive
  }
}