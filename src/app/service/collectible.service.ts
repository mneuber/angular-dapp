import { Injectable } from '@angular/core';
import {Web3Service} from './web3.service';
import CollectibeABI from '../../../build/contracts/CollectibleFactory.json';
import {parseCollectible} from '../factory/parseCollectible';
import {CollectibleListItem} from '../models/collectibles/CollectibleListItem';
import fakeCollectibles from '../dummy/json/data.json';

@Injectable({
  providedIn: 'root'
})
export class CollectibleService {


  collectibleContract: any;
  collectiblesOfOwner: CollectibleListItem[] = [];
  accounts: string[];
  constructor(
    private web3Service: Web3Service
  ) {


  }


  async initContract(): Promise<boolean> {


    if (this.collectibleContract) {
      return Promise.resolve(true);
    }

    this.web3Service.accountsObservable.subscribe(accounts => this.accounts = accounts);

    const contract = await this.web3Service.artifactsToContract(CollectibeABI);
    this.collectibleContract = await contract.deployed();
    return Promise.resolve(true);

  }

  async addCollectible(name: string, hash: string ) {

    let result = 'failed';
    try {

        console.log(hash, this.accounts[0]);
       result = await this.collectibleContract.createCollectible.sendTransaction(name, hash , {from: this.accounts[0]} );
    } catch (err) {
      console.log(err);
    }
    return result;
  }

  async getCollectibleById(id: number) {
      if (this.collectiblesOfOwner.length > 0) {
        return this.collectiblesOfOwner.find( collectible => collectible.id === id );
      }
      return this.fetchCollectibles().then( (collectibles) => this.getCollectibleById(id) );
  }

  async fetchCollectibles() {

    const collectibleIds = await this.collectibleContract.getCollectiblesOfOwner.call(this.accounts[0]);

    for (const id of collectibleIds) {

        const collectibleChaindata = await this.collectibleContract.collectibles.call(id);
        const collectible: CollectibleListItem = parseCollectible(collectibleChaindata);
        collectible.id = id.toNumber();
        this.collectiblesOfOwner.push(collectible);
    }
    return this.collectiblesOfOwner;
  }
}
