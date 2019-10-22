// The following line = "hey eslint, these are global variables, don't complain about them not being initialized" (in this case, I think it's b/c we know the ga/twttr variables will be included on our page because ____ ?? (b/c they're everywhere...?))
/* globals twttr ga */
// The following will disable the named eslint rule for the entire script.
// OR... see bad-code-FINISHED.js for an example of disabling eslint or an eslint rule and then reenabling it later on in the file
// /* eslint disable no-extend-native */
var weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then(responses => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => {
    return Promise.all(responses.map(res => res.json()));
  })
  .then(responses => {
    console.log(responses);
  });
