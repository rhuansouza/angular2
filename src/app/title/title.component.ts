import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{
  

  @Input() public title:string = "Bem vindo";

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    console.log('Foi alterado com sucesso')
  }

  ngOnDestroy():void{
    console.log('O componente foi destruido');
  }
  

  
}
