import { Injectable } from "@angular/core";

import { Item } from "./item";

declare class ItemService {
    getItems(): Item[];
    getItem(id: number): Item;
}

export function getAugmentedItemById(itemService: ItemService, id: number): Item;
