import { Component, OnInit } from '@angular/core';
import {CollectibleListItem} from '../models/collectibles/CollectibleListItem';
import {FakeCollectibleService} from '../service/fake-collectible.service';

@Component({
  selector: 'app-own-collectibles',
  templateUrl: './own-collectibles.component.html',
  styleUrls: ['./own-collectibles.component.css']
})
export class OwnCollectiblesComponent implements OnInit {

  collectibles: CollectibleListItem[];
  hasCollectibles: boolean;

  constructor(private collectibleService: FakeCollectibleService) { }

  ngOnInit() {

    this.hasCollectibles = false;
    this.getCollectibles();
  }


  onClickCollectible(collectibleId)
  {


  }



    getCollectibles() {
    this.collectibleService.fetchCollectibles()
      .then(collectibles => {
        console.log(collectibles);
        this.hasCollectibles = collectibles.length > 0 ;
        this.collectibles = collectibles;

      });
  }



}
