
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
  private isSelected: boolean = false;
  private isLoading: boolean = false;

  constructor(public navCtrl: NavController, public pokeProv: PokellamadaProvider) {
    this.openmodal();
    this.isLoading = true;
    this.pokeProv.getAllPokemon().then(data => {
        this.pokelist = data;
        console.log(this.pokelist);
        this.closemodal();
        this.isSelected = false;
        this.isLoading = false;
      }
    );
  }

  preparaRequest(elegido){
    console.log('vamos a buscarlo!');
    this.isLoading = true;
    this.pokeProv.getPokemon(elegido).then(data => {
        this.pokemon = data;
        console.log(this.pokemon);
        console.log('la logramos po hermané');
        this.isSelected = true;
        this.isLoading = false;
      }
    );
  }

  openmodal(){
    console.log('Consiguiendo la lista amiguitoz!');
  }

  closemodal(){
    console.log('la lista ya fue conseguida');
  }

}
