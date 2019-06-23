const request = require('request');
const cheerio = require('cheerio');
const Set = require("collections/set");
//initialise sets to store the various elements from the scraped data (without any duplicates)
const text =  new Set(); // This one will contain all the text of the document
const paragraph =  new Set();
const hruler = new Set();
const atag =  new Set();
const list =  new Set();
const div =  new Set();
const span =  new Set();

function GetElements ($, elements, set){
    elements.each((i, el)=>{
        const title = $(el).text().replace(/\s+/g, " ").trim();
        if(title.length > 0){
            set.add(title);
        }
    })
  }
request('http://www.google.com/', (error, response, html) =>{
  if (!error && response.statusCode ==200){
    const $ = cheerio.load(html);
    GetElements($, $('*'), text); // scrape all the text from a webpage and store it in a set
    GetElements($, $('p'), paragraph); // scrape all text from the paragraph headers
    GetElements($, $('hr'), hruler); // scrape all the text from the horizontal ruler tags
    GetElements($, $('a'), atag); // scrape all the text from the (anchor) tags
    GetElements($, $('ul,ol,li'), list)     // scrape all the text from lists (unordered, ordered, list element)
    GetElements($, $('div'), div); // scrape all the text from the div tags
    GetElements($, $('span'), span) // scrape all the text from the span tags
  console.log(list);
  }
});
