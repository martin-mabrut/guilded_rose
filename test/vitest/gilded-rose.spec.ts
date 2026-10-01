import { Item, GildedRose, GildedRose2 } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose2([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should deteriorate', () => {
    const gildedRose = new GildedRose2([new Item('foo', 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it('should deteriorate 2 times faster when sellIn is passed', () => {
    const gildedRose = new GildedRose([new Item('foo', -1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie should increase quality when sellIn deccrease', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(3);
  });

  it('Aged Brie quality never exceed 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });

  it('Quality can not exceed 50', () => {
    const gildedRose = new GildedRose([new Item('foo', 2, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });

  it('Sulfuras quality and sellIn never decrease', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 3, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(3);
  });

  it('Backstage passes increase quality when sellIn deccrease', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(4);
  });

  it('Backstage passes increase quality by 2 when sellIn is less than 11', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(5);
  });

  it('Backstage passes increase quality by 3 when sellIn is less than 6', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
  });
});
