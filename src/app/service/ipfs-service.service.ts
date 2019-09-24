import { Injectable } from '@angular/core';
declare let require: any;
const ipfsClient = require('ipfs-http-client');
const fileReader = require('pull-file-reader');


@Injectable({
  providedIn: 'root'
})
export class IpfsServiceService {

  ipfs: any;

  constructor() {
    this.ipfs = ipfsClient();
  }



  getFile(hash: string): any {

    return this.ipfs.get(hash)
      .then( file => console.log(file));
  }


  addFile( file: File, name: string = 'Standard' ) {

    const stream = fileReader(file);
    return this.ipfs.add(stream,  { progress: (prog) => console.log(`received: ${prog}`) })
      .catch((err) => console.log(err));

  }
}
