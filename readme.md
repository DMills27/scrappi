# scrappi

> Versatile web scraping utility designed with collecting time series data in mind.
## Install

```bash
npm i scrappi
```
## Usage
Main use case of scrappi would be to scrape a webpage for value(s), post to an api endpoint, at a specific interval

```javascript
import scrappi from 'scrappi'


let result = await scrappi({
    target: 'https://google.com', //Get html
    endpoint: 'https://coolapi/post', //Post results to here
    tick: 500, // Every 500ms
    onDocumentReceived: (html) => {
        //do whatever with html in here
    },
    post: (json) => {
        //send json to endpoint
    }
})
```


## Building
To build bundles files run
```javascript
npm run build
```
Files are outputted to `dist/`.

## Options
| Option       | Type           | Default |Description  |
| ------------- |:-------------:|:-------------:| :-----|
| target      | string | `https://google.com` | Target URL of webpage you want to scrape |
| endpoint      | string| ``      |   Endpoint URL of webpage you want to post to |
| verbose | boolean      | `true` |    Displays additional information during operation |
| once | boolean      | `false` |    Sets scrappi ineration to 1, good for debugging |
| tick | number      | 500 |    How often scrappi should scrape and post |
| onDocumentReceived |  function |`() => {}`      |    Is called when scrappi receives html from target webpage|
| post | function      | `() => {}` |    Is called when scrappi is ready to post json payload|

## Examples

`scrappi` is very versatile, use any html and xhr library as you wish  

### Scrappi + Cheerio + XHR
```javascript
import scrappi from 'scrappi'
import cheerio from 'cheerio'
import xhr from 'xhr'


let result = await scrappi({
    target: 'https://google.com', //Get html
    endpoint: 'https://coolapi/post', //Post results to here
    tick: 500, // Every 500ms
    onDocumentReceived: (html) => {
        //do whatever with html in here
        let $ = cheerio.load(html)
        return{
            title: $(".title")
        }
    },
    post: (json) => {
        //send json to endpoint
        xhr({
            method: "post",
            body: JSON.Stringify(json),
            uri: "/https://coolapi/post",
            headers: {
                "Content-Type": "application/json"
            }
        }, function (err, resp, body) {
            // check resp.statusCode
        })
    }
})
```