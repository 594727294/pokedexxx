
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokellamadaProvider } from '../../providers/pokellamada/pokellamada';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private pokelist: any = '';
  private pokemon: any = '';
  private pokedesc: any = '';
  private isSelected: boolean = false;
  private isLoading: boolean = false;
  private doneLoading: boolean = false;
  private loadList: boolean = false;
  private loadSingle: boolean = false;

  constructor(public navCtrl: NavController, public pokeProv: PokellamadaProvider) {
    this.openmodal();
    this.isLoading = true;
    this.pokeProv.getAllPokemon().then(data => {
        this.pokelist = data;
        //console.log(this.pokelist);
        this.closemodal();
        this.isSelected = false;
        this.isLoading = false;
        this.loadList = true;
      }
    );
  }

  preparaRequest(elegido){
    console.log('atrapalos ya!');
    this.doneLoading = false;
    this.isLoading = true;
    this.loadSingle = false;
    this.pokeProv.getPokemon(elegido).then(data => {
        this.pokemon = data;
        console.log(this.pokemon);
        this.isSelected = true;
        this.isLoading = false;
        this.loadSingle = true;
      }
    );
    this.pokeProv.getPokeDesc(elegido).then(data => {
      this.pokedesc = data;
      console.log(data);
      this.doneLoading = true;
    });
    
  }

  openmodal(){
    console.log('Consiguiendo la lista amiguitoz!');
  }

  closemodal(){
    console.log('la lista ya fue conseguida');
  }

}
