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
    await page.click("input[name=q]");
    await page.type("input[name=q]", '2*6');
    await page.evaluate(async() => {
      await new Promise(function(resolve) { 
             setTimeout(resolve, 2000)
      });
  });
    await page.click('input[type=submit]');   
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

// validating the result displayed in result
var resultxpath = "//*[@id='cwos']";
const content = await page.$x(resultxpath);
let result = await page.evaluate(el=>el.textContent,content[0]);
console.log(result);
expect(result).toBe('12')

});


})


