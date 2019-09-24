import { Component, OnInit } from '@angular/core';
import {CollectibleService} from '../../service/collectible.service';
import {IpfsServiceService} from '../../service/ipfs-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private collectibleService: CollectibleService,
              private ipfsService: IpfsServiceService) { }

  selectedFile: File;
  collectibleName: string;
  errorMessage: string;
  successMessage: string;

  ngOnInit() {
  }


  onFileSelected(event) {

    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onCreateCollectible() {
    // 1. check if file exists
    // 2. check if name exists
    // 3. send to ipfs
    // 4. add to blockchain

    if (!this.selectedFile) {
      this.errorMessage = 'Keine Datai hochgeladen';
      return;
    }

    if (this.collectibleName === '') {

      this.errorMessage = 'Bitte einen Namen vergeben';
      return;
    }


    this.ipfsService.addFile(this.selectedFile)
      .then((result) => {
        console.log(result);
        this.collectibleService.addCollectible('Standard', result[0].hash)
          .then(transactionResult => {

            console.log(transactionResult);
            this.errorMessage = '';
            this.successMessage = 'Prima es hat geklappt';

          });
      });

  }
}
