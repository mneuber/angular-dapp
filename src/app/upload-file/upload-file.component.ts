import { Component, OnInit } from '@angular/core';
import {IpfsServiceService} from '../service/ipfs-service.service';
import {CollectibleService} from '../service/collectible.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private ipfsService: IpfsServiceService,
              private collectibleService: CollectibleService) { }

  ngOnInit(): void {


  }

  onFileSelected(event) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ipfsService.addFile(file)
        .then((result) => {
          console.log(result);
         this.collectibleService.addCollectible('Standard', result.hash );
        });
    }
  }

  getCollectibles() {
    this.collectibleService.fetchCollectibles();
  }


  testContract() {

    this.collectibleService.addCollectible('Josh', 'sdksokdoskdoskd');

  }

}
