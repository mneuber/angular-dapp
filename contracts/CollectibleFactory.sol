pragma solidity ^0.4.0;

import  "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract CollectibleFactory is Ownable {

    struct Collectible  {

        string name;
        string hash;
    }

    struct Creator {
        uint mediaPlatform;
        string identifier;
    }

    struct AuthMediaService {
        string name;
        string url;
    }

    AuthMediaService[] public authMediaServices;
    Collectible[] public collectibles;

    mapping (uint => Creator) public collectibleToCreator;
    mapping (uint => address) public collectibleToOwner;
    mapping (address => uint) ownerCollectibleCount;

    function createCollectible(string _name, string _hash) public returns (uint) {

        uint id = collectibles.push(Collectible(_name, _hash));
        collectibleToOwner[id] = msg.sender;
        ownerCollectibleCount[msg.sender] ++;
        return id;
    }

/*    function createCollectible(string _name, string _hash, uint _mediaPlatform, string _identifier ) external returns (uint) {

        uint id = createCollectible(_name, _hash);
        collectibleToCreator[id] = Creator(_mediaPlatform, _identifier);

        return id;
    }*/

    function getCollectiblesOfOwner(address _owner) public view returns  (uint[]) {

        uint counter = 0;
        uint[] memory result = new uint[](ownerCollectibleCount[_owner]);
        for (uint i = 0; i < collectibles.length; i++) {
          if (collectibleToOwner[i] == _owner) {
            result[counter] = i;
            counter++;
            }
        }

        return result;

    }

    function addAuthMediaService(string _name, string _url) external onlyOwner {
      authMediaServices.push(AuthMediaService(_name, _url));
    }



}
