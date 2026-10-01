export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  decreaseQuality(item) {
    if(item.quality > 0) {
      item.quality -= 1;
    }
  }

  increaseQuality(item, number: number) {
    const sum = item.quality + number;

    if(sum >= 50) {
      item.quality = 50;
      return;
    }
    item.quality += number;
  }

  decreaseSellIn(item) {
    item.sellIn -= 1;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      switch(this.items[i].name) {

        case "Sulfuras, Hand of Ragnaros":
          break;

        case "Aged Brie":
          this.increaseQuality(this.items[i], 1);
          this.decreaseSellIn(this.items[i]);
          if(this.items[i].sellIn < 0) {
            this.increaseQuality(this.items[i], 1);
          }
          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          this.increaseQuality(this.items[i], 1);
          if (this.items[i].sellIn < 11) {
            this.increaseQuality(this.items[i], 1);
          }
          if (this.items[i].sellIn < 6) {
            this.increaseQuality(this.items[i], 1);
          }
          this.decreaseSellIn(this.items[i]);
          if(this.items[i].sellIn < 0) {
            this.items[i].quality = 0;
          }
          break;
          

        default:
          this.decreaseQuality(this.items[i]);
          this.decreaseSellIn(this.items[i]);
          if(this.items[i].sellIn < 0) {
            this.decreaseQuality(this.items[i]);
          }
      }
    }

    return this.items;
  }
}