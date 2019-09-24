import {Component, Input, OnInit} from '@angular/core';
import {CollectibleListItem} from '../../../models/collectibles/CollectibleListItem';
import {MediaIcons} from '../../../enum/media-type.enum';

@Component({
  selector: 'app-collectible-item',
  templateUrl: './collectible-item.component.html',
  styleUrls: ['./collectible-item.component.css']
})
export class CollectibleItemComponent implements OnInit {


  @Input()
  collectible: CollectibleListItem;

  iconName: string;

  constructor() { }


  ngOnInit() {

    this.iconName = MediaIcons.get(this.collectible.mediaType);
  }
}
