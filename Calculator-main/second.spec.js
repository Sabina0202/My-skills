const { browser } = require('protractor');

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('Second suit', function () {

    it('second test', async function () {
    const searchButtonSelector = '#app > div > div > div.ppdw-main-card.ppdw-border > div > div.ppdw-stepper-body > div > div:nth-child(1) > div > span.gos-sign-link.c-pointer'
    const searchButton = $(searchButtonSelector)

    await browser.get('https://b2c.pampadu.ru/index.html#49a973bd-2d7c-4b9b-9c28-d986d7757983')

    await browser.wait(EC.elementToBeClickable(searchButton), 5000, 'Search button should be clickable')

    await searchButton.click()

    await browser.sleep(7*1000)

  })
})


