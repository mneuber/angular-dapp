import {Component, Input, OnInit} from '@angular/core';
import {CollectibleListItem} from '../../../models/collectibles/CollectibleListItem';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  audioSource: string;


  @Input()
  collectible: CollectibleListItem;

  basePath: string = '../assets/samples/';

  constructor() { }



  ngOnInit() {

    this.audioSource = this.basePath + this.collectible.hash;

  }

}
