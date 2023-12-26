import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/core/services/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  listPokemon: any[] = [];

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.getAllPokemon();

  }

  getAllPokemon() {
    this.pokeApiService.getAllPokemon("0").subscribe({
      next: (next) => {
        this.listPokemon = next
        console.log(this.listPokemon);
      }
    })
  }
}
