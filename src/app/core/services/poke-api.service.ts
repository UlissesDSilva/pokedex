import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = "https://pokeapi.co/api/v2/pokemon"
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllPokemon(offSet: string): Observable<any> {
    return this.http.get<any>(`${this.url}?offset=${offSet}&limit=20`).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPok: any) => {
          this.getAttPokemons(resPok.url).subscribe(res => resPok.status = res)
        })
      })
    )
  }

  getAttPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map( res => res )
    )
  }

}
