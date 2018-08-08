const puppeteer = require('puppeteer');
jest.setTimeout(30000);
describe('Open Google', () => {
  var browser, page;
  var url = 'https://google.com'
beforeEach (async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  })
afterEach (() => {
    browser.close()
  })
