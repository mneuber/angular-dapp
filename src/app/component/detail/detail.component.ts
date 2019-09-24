import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CollectibleListItem} from '../../models/collectibles/CollectibleListItem';
import {IpfsFakeService} from '../../service/ipfs-fake.service';
import {FakeCollectibleService} from '../../service/fake-collectible.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
            //  private ipfsService: IpfsServiceService,
              private ipfsService: IpfsFakeService,
              private collectibleService: FakeCollectibleService) { }

  chainId$: Observable<string>;
  id: number;

  collectible: CollectibleListItem;
  collectibleFile: File;


  ngOnInit() {

    this.route.paramMap.
      subscribe(this.parseRouteParam);

  }


   parseRouteParam = (params: ParamMap) => {

    this.id = parseFloat(params.get('id'));
    console.log(this.id);

    this.collectibleService.getCollectibleById(this.id)
      .then( collectible => {

        this.collectible = collectible;

        this.ipfsService.getFile(this.collectible.hash)
          .then( res => console.log(res));

      });


    }
  }
