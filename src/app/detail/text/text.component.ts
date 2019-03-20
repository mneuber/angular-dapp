import {Component, Input, OnInit} from '@angular/core';
import {CollectibleListItem} from '../../models/collectibles/CollectibleListItem';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  textData: string;


  @Input()
  collectible: CollectibleListItem;

  basePath: string = '../assets/samples/';




  ngOnInit() {

    this.textData = this.basePath + this.collectible.hash;

  }

}
