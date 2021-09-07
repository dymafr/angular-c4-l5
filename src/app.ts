import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EnfantComponent} from './enfant.component';

@Component({
  selector: 'my-app',
  
  // Nous effectuons une liason de donnée sur l'instance du composant enfant :
  template: `
      <div>
        <app-enfant #compteur></app-enfant>
      </div>
      <button (click)="compteur.decrementer()" > - </button>
      <button (click)="compteur.incrementer()"> + </button>
  `
})

export class AppComponent implements OnInit {
  
  ngOnInit() {
  }
  
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, EnfantComponent ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}