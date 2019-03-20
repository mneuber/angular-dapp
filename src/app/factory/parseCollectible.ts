import {CollectibleListItem} from '../models/collectibles/CollectibleListItem';

export function parseCollectible(collectibleChainData: any): CollectibleListItem {

  const collectibleItem: CollectibleListItem = new CollectibleListItem();
  collectibleItem.name = collectibleChainData[0];
  collectibleItem.hash = collectibleChainData[1];


  return collectibleItem;

}
