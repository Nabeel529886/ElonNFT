// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


contract ElonNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;



    constructor() ERC721("Elon Musk", "ELON") {}

    function mintNFT() public returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, "ipfs://bafyreifi2n6ji4hi6mxbouixzgu6ulp66d7ifx434pij6g5q7lpoi577rm/metadata.json");
        console.log("The NFT ID %s has been minted to %s", newItemId, msg.sender);
        return newItemId;
    }
}