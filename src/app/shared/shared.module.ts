import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    ListComponent,
    SearchComponent
  ]
})
export class SharedModule { }
