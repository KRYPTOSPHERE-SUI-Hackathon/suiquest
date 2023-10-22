module mint::nft {
  use sui::url::{Self, Url};
  use std::string;
  use sui::object::{Self, UID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};
  use std::vector;
}


struct NFT has key, store {
    id: UID,
    name: string::String, 
    description: string::String,
    image_url: Url,
    nb_quest_res : vector<u64>
    // Add any custom attributes here
}

struct MintNFTEvent has copy, drop {
    object_id: ID,
    creator: address,
    name: string::String,
}

public fun name(nft: &NFT): &string::String {
    &nft.name
}

/// Get the NFT's `description`
public fun description(nft: &NFT): &string::String {
    &nft.description
}

/// Get the NFT's `url`
public fun url(nft: &NFT): &Url {
    &nft.url
}

public fun mint(name: vector<u8>, description: vector<u8>, url: vector<u8>, ctx: &mut TxContext, quest: u64) {
    // create the new NFT
    let nft = NFT {
      id: object::new(ctx),
      name: string::utf8(name),
      description: string::utf8(description),
      url: url::new_unsafe_from_bytes(url),
      vector::push_back(quest);
    };

    // mint and send the NFT to the caller
    let sender = tx_context::sender(ctx);

    // transfer the NFT to the caller
    transfer::public_transfer(nft, sender);
}

/// Update the `description` of `nft` to `new_description`
public entry fun update_description(nft: &mut DevNetNFT,new_description: vector<u8>, _: &mut TxContext) 
{
    nft.description = string::utf8(new_description)
}

struct Noob has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}

struct Casual has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}

struct Master has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}

struct Master has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}

struct Veteran has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}

struct Black_mage has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}

struct Legendary has key, store {
    id: UID,
    min_level: u64,
    privileges: vector<T>
}