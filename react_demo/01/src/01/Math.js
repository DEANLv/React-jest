const word ='HELLO WORLD';

const array = ['2', 'b', '9', 'a', '7', '3', '4', 'b', '6', '4'];

const handle = (arr) => {

    // ...your code

    // eslint-disable-next-line no-undef

    return Array.from(new Set(arr)).sort() // 升序排列

}

console.log(handle(array))


const url = new URL('https://baidu?a=1&b=2&c=3#/abc/def?a=2&b=3&c=4');

const getParamFromURL = (url, key) => {

    //...your code

    return new URLSearchParams(url.search).get(key);

}

console.log(getParamFromURL(url, 'a'))


const text = '今天我淘到了一个宝贝，你也看一下感觉很适合你 URL，种草的话，下单吧！'

const getUrlFromWords = (text) => {
    //...your code

    let matchUrlRegex  = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;

   

    const strValue = text.match(matchUrlRegex);

    if (strValue && strValue.length > 0) {
        let url =  new URL(strValue[0])

        if(url.host === 'url1' || url.host === 'url2'){
            return 'message send!';

        }

      }

      return null;

}

console.log(getUrlFromWords(text))

export {word} ;