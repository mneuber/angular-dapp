import {Component, Input, OnInit} from '@angular/core';
import {CollectibleListItem} from '../../../models/collectibles/CollectibleListItem';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgPath: string;


  @Input()
  collectible: CollectibleListItem;

  basePath: string = '../assets/samples/';

  constructor() { }



  ngOnInit() {

    this.imgPath = this.basePath + this.collectible.hash;

  }
}
