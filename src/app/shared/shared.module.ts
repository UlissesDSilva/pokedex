import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HeaderComponent
  ]
})
export class SharedModule { }