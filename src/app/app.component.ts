import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <button (click)="destruirComponent()">Destruir Componente</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{
  public destruir: boolean = true;
  constructor(){}
  ngOnInit(): void {
   setTimeout(() => {
    console.log(1);
   }, 5000);
  }

  public destruirComponent() {
    this.destruir = false;
  } 
 
    
}