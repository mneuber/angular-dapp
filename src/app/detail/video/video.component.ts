import {Component, Input, OnInit} from '@angular/core';
import {CollectibleListItem} from '../../models/collectibles/CollectibleListItem';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoSource: string;


  @Input()
  collectible: CollectibleListItem;

  basePath: string = '../assets/samples/';

  constructor() { }



  ngOnInit() {

    this.videoSource = this.basePath + this.collectible.hash;

  }

}
