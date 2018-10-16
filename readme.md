# scrappi

> Versatile web scraping utility designed with collecting time series data in mind.

## Usage
Main use case of scrappi would be to scrape a webpage for value(s), post to an api endpoint, at a specific interval

```javascript
import scrappi from 'scrappi'


let result = await scrappi({
    target: 'https://coolwebpage.com', //Get html
    endpoint: 'https://coolapi/post', //Post results to here
    tick: 500, // Every 500ms
    onDocumentReceived: (html) => {
        //do whatever with html in here
    },
})
```


## Building
To transpile files run
```javascript
npm run build
```
Files are outputted to `build/`. Then run with `node build/index.js`

## Options
| Option       | Type           | Description  |
| ------------- |:-------------:| -----:|
| target      | string | Target URL of webpage you want to scrape |
| endpoint      | string      |   Endpoint URL of webpage you want to post to |
| tick | number      |    How often scrappi should scrape and post |
| onDocumentReceived | function      |    Overridable function to transform html, must return an Object to post|