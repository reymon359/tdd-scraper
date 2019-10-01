const cheerio = require('cheerio');

exports.listings = (html) => {

    const $ = cheerio.load(html);
    return $('.result-info').map((index, element) => {
        const title = $(element).find('.result-title.hdrlnk').text();
        return { title }
    }).get();

}