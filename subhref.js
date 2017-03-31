chrome.tabs.onUpdated.addListener(function(tabID, info, tab) {

    let prefixes = ['my', 'the', 'web', 'go', 'free', 'get', 'pro', 'mobile', 'best', 'all', 'easy', 'digital',
      'top', 'auto', 'love', 'world', 'hot', 'buy', 'net'];

    let suffixes = ['online', 'blog', 'web', 'media', 'digital', 'shop', 'book', 'store', 'inc', 'tech', 'design',
      'box', 'now', 'site', 'news', 'app', 'club', 'pro', 'plus', 'tv', 'network', 'zone', 'link', 'cloud', 'it',
      'life', 'works', 'hub', 'list', 'direct', 'info', 'mail', 'central', 'lab', 'house', 'usa', 'me', 'art', 'music'];

    let nouns = ['photos','time', 'issue', 'year', 'side', 'people', 'kind', 'way', 'head', 'day', 'house', 'man', 'service', 'thing',
      'friend', 'woman', 'father', 'life', 'power', 'child', 'hour', 'world', 'game', 'school', 'line', 'state', 'end', 'family',
      'member', 'student', 'law', 'group', 'car', 'country', 'city', 'problem', 'community', 'hand', 'name', 'part', 'president',
      'place', 'team', 'case', 'minute', 'week', 'idea', 'company', 'kid', 'system', 'body'];

    let topics = ['news', 'report', 'issues', 'environment', 'weather', 'taxes', 'election', 'education', 'technology', 'health',
      'healthcare', 'children', 'energy', 'history', 'science', 'math', 'people', 'company', 'companies', 'automotive', 'cars',
      'finance', 'airline', 'economy', 'soccer', 'football', 'baseball', 'hockey', 'golf', 'basketball', 'tennis', 'racing',
      'running', 'boxing', 'actor', 'model', 'director', 'artist', 'comic', 'theater', 'comedian', 'food', 'movies', 'music',
      'internet', 'book', 'style', 'entertainment', 'sports', 'business', 'lifestyle', 'realestate', 'asia', 'europe', 'middle-east',
      'mortgage', 'insurance', 'travel', 'media', 'markets', 'africa', 'culture', 'cinema', 'social'];

    let sites = ['abc', 'nbc', 'cbs', 'fox', 'cnn', 'msnbc', 'yahoo', 'youtube', 'uber', 'lyft', 'google',
      'facebook', 'twitter', 'amazon', 'apple', 'netflix', 'ebay', 'money', 'expedia', 'wikipedia', 'linkedin',
      'espn', 'cnnmoney', 'forbes', 'bbc', 'npr', 'pbs', 'pinterest', 'baidu', 'taobao', 'msn', 'microsoft', 'wordpress',
      'bing', 'tencent', 'reddit', 'tumblr', 'instagram', 'twitch', 'imdb', 'hotmail', 'alexa', 'imgur', 'dropbox',
      'stackoverflow', 'officeonline', 'wikia', 'vk', 'yandex', 'mail', 'adobe', 'github', 'craigslist', 'booking',
      'nascar', 'mlb', 'nba', 'nfl', 'mls', 'alexa'];

    let wwws = ['www.', ''];
    let www = wwws[Math.floor(Math.random()*wwws.length)];

    let tlds = ['com', 'net'];
    let tld = tlds[Math.floor(Math.random()*tlds.length)];

    let separators = ['-', ''];
    let separator = separators[Math.floor(Math.random()*separators.length)];


    let site = sites[Math.floor(Math.random()*sites.length)];
    let prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
    let noun = nouns[Math.floor(Math.random()*nouns.length)];
    let topic1 = topics[Math.floor(Math.random()*topics.length)];
    let topic2 = topics[Math.floor(Math.random()*topics.length)];
    let topic3 = topics[Math.floor(Math.random()*topics.length)];

    let suffix = suffixes[Math.floor(Math.random()*suffixes.length)];


    let queries = ['',`?q=${noun}`,'',`?q=${topic1}+${topic3}`,'',`?search=${topic2}`,`?q=${topic3}`];
    let query1 = queries[Math.floor(Math.random()*queries.length)];
    let query2 = queries[Math.floor(Math.random()*queries.length)];

    let paths = ['','/index.html','','',''];
    let path = paths[Math.floor(Math.random()*paths.length)];

    let urls = [];
        urls.push(`http://${www}${site}.com${query2}`);
        urls.push(`http://${www}${prefix}${noun}.${tld}${query1}`);
        urls.push(`http://${www}${noun}${suffix}.${tld}`);
        urls.push(`http://${www}${prefix}${separator}${noun}.${tld}${query1}`);
        urls.push(`http://${www}${noun}${separator}${suffix}.${tld}`);
        urls.push(`http://${www}${prefix}${topic2}.${tld}`);
        urls.push(`http://${www}${topic2}${suffix}.${tld}${query2}`);
        urls.push(`http://${www}${prefix}${separator}${topic2}.${tld}`);
        urls.push(`http://${www}${topic2}${separator}${suffix}.${tld}${query1}`);

    let url1 = urls[Math.floor(Math.random()*urls.length)];
    let url2 = urls[Math.floor(Math.random()*urls.length)];

    if (url1.indexOf('?') <= 0) {
      url1 += path;
    }

    if (url2.indexOf('?') <= 0) {
      url2 += path;
    }

    let count = () => {
      // Log how many requests you've made
      let c = 0;
      chrome.storage.local.get('noise_count', (items) => {
        if (items.noise_count) {
          c = parseInt(items.noise_count, 10);
        }
        c++;
        chrome.storage.local.set({'noise_count': `${c}`}, () => {
          console.log(`You have generated ${c} fake requests.`);
        });
      });
    }

    fetch(url1)
      .then( (res) => {
        count();
        return res.text();
      });

    fetch(url2)
      .then( (res) => {
        count();
        return res.text();
      });

});
