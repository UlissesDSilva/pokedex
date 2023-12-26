import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { FlagTypeComponent } from './components/flag-type/flag-type.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    HeaderComponent,
    ListComponent,
    FlagTypeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    ListComponent,
    SearchComponent
  ]
})
export class SharedModule { }
