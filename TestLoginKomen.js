const puppeteer = require('puppeteer');

const linkWeb ='https://www.facebook.com/watch/live/?ref=search&v=444218997428282';

// //Akun 3
(async () => {
  const browser = await puppeteer.launch({ }); // default is true
  const page = await browser.newPage();
  await page.goto('https://facebook.com');
  await page.waitForTimeout(5000)

  //Login Email
  await page.evaluate(() => {
    const email = document.querySelector('#email');
    email.value = '';
  });

  //password
  await page.waitForTimeout(2000)
  await page.evaluate(() => {
    const password = document.querySelector('#pass');
    password.value = '';
  });

  await page.click('[name="login"]');
  await page.waitForTimeout(5000)

  await page.goto(linkWeb);
  await page.waitForTimeout(10000)

  //Klik Tombol Suka
  // await page.click('[aria-label="Suka"]');
  // await page.waitForTimeout(5000)
  
  await page.click('[aria-label="Beri komentar"]');
  await page.waitForTimeout(5000)

  //isi Komentar
  const comments = ['coba tes koment'];

  for (let index = 0; index < 5; index++) {

    for(const cm of comments){
      await page.type("input", cm, {delay: 100});
      await page.waitForTimeout(15000)
      await page.keyboard.press("Enter");

    }
  }
  
})();




// hegif37695@chnaxa.com