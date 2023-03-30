const { browser } = require('protractor');

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function () {

  it('first test', async function () {

    let firstInput = element(by.css('input#first'));
    let secondInput = element(by.css('input#second'));

    const searchValue1 = 'А163УХ'
    const searchValue2 = '123'

    const searchInputSelector1 = '#app > div > div > div.ppdw-main-card.ppdw-border > div > div.ppdw-stepper-body > div > div:nth-child(1) > div > div > div.gos-input-main-container > input'
    const searchInput1 = $(searchInputSelector1)

    const searchInputSelector2 = '#app > div > div > div.ppdw-main-card.ppdw-border > div > div.ppdw-stepper-body > div > div:nth-child(1) > div > div > div.layout.gos-input-region-container.column > input'
    const searchInput2 = $(searchInputSelector2)

    const searchButtonSelector = '#app > div > div > div.ppdw-main-card.ppdw-border > div > div.ppdw-stepper-body > div > div:nth-child(1) > div > button'
    const searchButton = $(searchButtonSelector)

    await browser.get('https://b2c.pampadu.ru/index.html#49a973bd-2d7c-4b9b-9c28-d986d7757983')

    await browser.wait(EC.visibilityOf(searchInput1), 5000, 'Search input should be visible')
    await browser.wait(EC.visibilityOf(searchInput2), 5000, 'Search input should be visible')
    await browser.wait(EC.visibilityOf(searchButton), 5000, 'Search button should be visible')

    await searchInput1.sendKeys(searchValue1)
    await searchButton.click()

    await searchInput2.sendKeys(searchValue2)
    await searchButton.click()

    await browser.sleep(5*1000)
  })
})
