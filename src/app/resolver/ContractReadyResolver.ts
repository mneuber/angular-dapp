import {Resolve} from '@angular/router';
import {CollectibleService} from '../collectible.service';
import {Injectable} from '@angular/core';
import {FakeCollectibleService} from '../fake-collectible.service';

@Injectable()
export class ContractReadyResolver implements Resolve<boolean> {

  constructor(private collectibleService: FakeCollectibleService) {}

  resolve(): Promise<boolean> {

    return this.collectibleService.initContract();

  }


}
