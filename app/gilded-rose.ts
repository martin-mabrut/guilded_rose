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
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
          
            if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
              this.decreaseQuality(this.items[i]);
            }
          
        } else {
          
            this.increaseQuality(this.items[i], 1);
            if (
              this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
            ) {
              if (this.items[i].sellIn < 11) {
                  this.increaseQuality(this.items[i], 1);
              }
              if (this.items[i].sellIn < 6) {
                  this.increaseQuality(this.items[i], 1);
              }
            }    

        }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.decreaseSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.decreaseQuality(this.items[i]);
              
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          
            this.increaseQuality(this.items[i], 1);
          
        }
      }
    }

    return this.items;
  }
}


export class GildedRose2 {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {

      switch(item.name) {

        case "Sulfuras, Hand of Ragnaros":
          break;

        default:

        item.sellIn -= 1;

        switch(item.name) {

          case "Aged Brie": 
            item.quality += 1;

          case "Backstage passes to a TAFKAL80ETC concert":
            if (item.sellIn < 6) {
              item.quality += 3;
            } else if (item.sellIn < 11) {
              item.quality += 2;
            } else {
              item.quality += 1;
            }
          
            break;

          default:

            if(item.sellIn < 0) {
              item.quality -= 2;
            } else {
              item.quality -= 1;
            }

        }

        if(item.quality > 50) {
          item.quality = 50;
        }
      }

    })

    return this.items;
  }
}
