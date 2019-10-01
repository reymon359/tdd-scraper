const cheerio = require('cheerio');

exports.listings = (html) => {

    const $ = cheerio.load(html);
    return $('.result-info').map((index, element) => {

        const titleElement = $(element).find('.result-title.hdrlnk');
        const title = titleElement.text();
        const url = titleElement.attr('href');
        const hood = $(element).find('.resutl-hood').text().trim();
        return { title, url }
    }).get();

}