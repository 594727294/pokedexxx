import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokellamadaProvider {

  private pokeurl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=949&offset=949%22';
  private pokelist: any;

  constructor(public http: HttpClient) {
    //console.log('Hello PokellamadaProvider Provider');
  }

  getAllPokemon(){
    return new Promise(resolve => {
      this.http.get(this.pokeurl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPokemon(elegido){
    let url = 'https://pokeapi.co/api/v2/pokemon/'+elegido;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    
  }

  getPokeDesc(elegido){
    let url = 'https://pokeapi.co/api/v2/pokemon-species/'+elegido;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
        //console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
