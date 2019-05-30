const request = require('request');
const cheerio = require('cheerio');
class Rate {
constructor(name,ratio,value){
    this.name = name;
    this.ratio = ratio;
    this.value = value;
    }
}

const options = {
    url:'https://www.nationalbank.kz/?furl=cursFull&switch=rus',
}

request(options, (err, req, html) => {
    if(!err) {
        const $ = cheerio.load(html);
        const table = $('table tr td.gen7');
        const curs = [];
        //table = $('table tr td.gen7');
        /* for(let i = 0; i < (table.length - 5); i += 5){
            curs[i] = new Rate(table.eq(i).text().trim(), table.eq(i + 1).text(),table.eq(i + 2).text());
        } */

        table.forEach((item,index)=> {
            curs[index] = new Rate(table.eq(i).text().trim(), table.eq(i + 1).text(),table.eq(i + 2).text());
            index+=5;
        });
        console.table(curs);
    }
    else {console.log(err);}
})