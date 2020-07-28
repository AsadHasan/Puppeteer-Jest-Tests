const {
  beforeAll, describe, expect, it, afterAll,
} = require('@jest/globals');
const puppeteer = require('puppeteer');

let browser;
let page;

describe('Hoka One website', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.hokaoneone.eu/en/gb/home/');
    const title = await page.title();
    await expect(title).toMatch('HOKA ONE ONE Running Shoes for Men & Women | Official HOKA ONE ONE Europe Store');
  });

  it('Should show shoes for men', async () => {
    await page.click('[data-qa=navbarToggler]');
    await page.click('[data-nav-link=men]');
    const Shoes = await page.$('[data-nav-link=men-shoes]');
    expect(Shoes).not.toBeNull();
  });

  afterAll(async () => {
    await browser.close();
  });
});
