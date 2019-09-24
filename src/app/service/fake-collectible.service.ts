import { Injectable } from '@angular/core';
import {parseCollectible} from '../factory/parseCollectible';
import fakeCollectibles from '../dummy/json/data.json';
import {CollectibleListItem} from '../models/collectibles/CollectibleListItem';


@Injectable({
  providedIn: 'root'
})
export class FakeCollectibleService {


  collectibles: CollectibleListItem[];

  constructor() { }


  initContract() {

    return Promise.resolve(true);
  }

  getCollectibleById(id)
  {
      return Promise.resolve(this.collectibles.find( collectible => collectible.id === id));
  }


  async fetchCollectibles() {

    this.collectibles =  (<any[]>fakeCollectibles).map( fakeCollectible => {
      return <CollectibleListItem>fakeCollectible;
    });

    return this.collectibles;

  }
}
