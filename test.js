const { Builder, By, until, WebElement } = require("selenium-webdriver");

const assert = require("assert");

async function homePageTest() {

  let driver = await new Builder().forBrowser("chrome").build();

  
  try {

    await driver.get("file:///E:/CIRCLE CI/AngelTechTestQ1/index.html");

    const pageTitle = await driver.getTitle();

    assert.strictEqual(pageTitle, "Angel Tech Test Q1");

    //

    var button = await driver.findElement(By.id('revealButton'));
    button.click();
    

  } 
  finally {

    await driver.quit();

  }

}

homePageTest();