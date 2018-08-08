const puppeteer = require('puppeteer');
jest.setTimeout(50000);
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
  

 //Opening the Page and entering the search query 
test('Title == google', async () => {
    await page.goto(url);   
    const title = await page.title();
    expect(title).toBe("Google");
    await page.focus("input[name=q]");
    await page.type("input[name=q]", "Botify");
    await page.evaluate(async() => {
      await new Promise(function(resolve) { 
             setTimeout(resolve, 1000)
      });
  });
    await page.click('input[type=submit]');   
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

  });    
})