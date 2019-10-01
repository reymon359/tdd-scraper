const parser = require('../parser');
const fs = require('fs');
let html;
let listings;


beforeAll(() => {
    html = fs.readFileSync('./test.html');
    listings = parser.listings(html);
});

// const listings = [{
//     title: 'Senior iOS Engineer - up to $160,000',
//     url: 'https://sfbay.craigslist.org/sfc/sof/d/san-francisco-airport-senior-ios/6990024477.html',
//     datePosted: new Date('2019-10-01'),
//     hood: '(San Francisco)'
// }];

it('should give the correct listing object', () => {
    expect(listings.length).toBe(120);
});

it('should give the correct url', () => {
    expect(listings[0].url).toBe('https://sfbay.craigslist.org/sfc/sof/d/san-francisco-airport-senior-ios/6990024477.html');
});

it('should give the correct title', () => {
    expect(listings[0].title).toBe('Senior iOS Engineer - up to $160,000');
});

it('should give the correct date', () => {
    expect(listings[0].title).toBe(new Date('2019-09-30 16:53'));
});

it('should give the hood', () => {
    expect(listings[0].title).toBe('');
});