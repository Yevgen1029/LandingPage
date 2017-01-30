var news = {

        "status": "ok",
        "source": "cnn",
        "sortBy": "top",
    "articles": [
        {
            "author": "Evan Perez, Pamela Brown and Kevin Liptak, CNN",
            "title": "Inside the confusion of the Trump executive order and travel ban",
            "description": "When President Donald Trump declared at the Pentagon Friday he was enacting strict new measures to prevent domestic terror attacks, there were few within his government who knew exactly what he meant.",
            "url": "http://www.cnn.com/2017/01/28/politics/donald-trump-travel-ban/index.html",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170128173223-president-trump-executive-orders-jan-28-2017-super-tease.jpg",
            "publishedAt": "2017-01-29T13:12:05Z"
        },
        {
            "author": "Azadeh Ansari and Ralph Ellis, CNN",
            "title": "More protests against Trump's immigration policies planned",
            "description": "Protesters gathered in cities and airports across the United States on Saturday to complain about President Donald Trump's immigration policies. More protests are scheduled for Sunday.",
            "url": "http://www.cnn.com/2017/01/29/politics/us-immigration-protests/index.html",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170128162259-05-protest-at-jfk-0128-super-tease.jpg",
            "publishedAt": "2017-01-29T09:52:00Z"
        },
        {
            "author": null,
            "title": "Read the judge's order",
            "description": null,
            "url": "http://i2.cdn.turner.com/cnn/2017/images/01/28/darweesh.v.trump_decision.and.order.document-3.pdf",
            "urlToImage": null,
            "publishedAt": null
        },
        {
            "author": "Ariane de Vogue, Eli Watkins and Alanne Orjoux, CNN",
            "title": "Homeland Security to comply with orders not to deport travelers",
            "description": "The US Department of Homeland Security said on Sunday it will comply with judicial orders not to deport detained travelers affected by President Donald Trump's seismic move to ban more than 130 million people from entering the United States.",
            "url": "http://www.cnn.com/2017/01/29/politics/ny-immigration-order-stay/index.html",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170128132536-01-travel-ban-hameed-khalid-darweesh-01028-super-tease.jpg",
            "publishedAt": "2017-01-29T11:25:20Z"
        },
        {
            "author": "Laurie Segall and Jackie Wattles",
            "title": "Tech leaders condemn Trump's immigrant ban",
            "description": "The ink is barely dry on President Trump's order to ban immigration from seven majority-Muslim countries, and tech companies are already speaking out.",
            "url": "http://money.cnn.com/2017/01/28/technology/immigration-ban-tech-reaction/index.html",
            "urlToImage": "http://i2.cdn.turner.com/money/dam/assets/170128133406-tech-zuckerburg-omidyar-dorsey-780x439.jpg",
            "publishedAt": "2017-01-28T12:56:02Z"
        },
        {
            "author": null,
            "title": "Trump: Travel ban working out very nicely - CNN Video",
            "description": "President Donald Trump says his executive order banning immigrants from seven Muslim-majority countries is working nicely.",
            "url": "http://www.cnn.com/videos/us/2017/01/28/trump-speaks-on-executive-order-travel-ban-nr.cnn",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170128172107-trump-speaks-on-executive-order-travel-ban-nr-00001307-super-tease.jpg",
            "publishedAt": null
        },
        {
            "author": "Sarah Jorgensen, CNN",
            "title": "Syrian Christians turned back at airport",
            "description": "A family of Syrian Christian immigrants arrive in Philadelphia to join their US relatives after a long wait. But because of President Trump's executive order, they are turned away.",
            "url": "http://www.cnn.com/2017/01/28/us/syrian-family-trump-travel-ban/index.html",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-tease.jpg",
            "publishedAt": "2017-01-29T12:24:41Z"
        },
        {
            "author": "Jeremy Diamond and Steve Almasy, CNN",
            "title": "Trump's immigration ban sends shockwaves",
            "description": "President Donald Trump's seismic move to ban more than 130 million people from the United States and to deny entry to all refugees reverberated worldwide Saturday, as chaos and confusion rippled through US airports, American law enforcement agencies and foreign countries trying to grasp Washington's new policy.",
            "url": "http://www.cnn.com/2017/01/28/politics/donald-trump-executive-order-immigration-reaction/index.html",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170126134143-trump-executive-order-0124-super-tease.jpg",
            "publishedAt": "2017-01-29T08:57:37Z"
        },

        {
            "author": "Julian Zelizer",
            "title": "Trump's fast and furious first week: The strategy",
            "description": "President Trump is overwhelming Washington with a series of provocative executive orders that aim to fulfill campaign promises and mask his narrow election win, writes Julian Zelizer.",
            "url": "http://www.cnn.com/2017/01/28/opinions/trumps-fast-and-furious-first-week-zelizer/index.html",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170127212126-04-trump-pentagon-signing-0127-super-tease.jpg",
            "publishedAt": "2017-01-29T12:25:23Z"
        },

        {
            "author": null,
            "title": "Sen. Chris Murphy's scathing tweet to President Trump - CNN Video",
            "description": "Democrat Sen. Chris Murphy  tweeted the image of a dead Syrian child after President Donald Trump issued an executive order banning Syrian refugees from the US indefinitely.",
            "url": "http://www.cnn.com/videos/politics/2017/01/28/senator-chris-murphy-trump-syrian-refugee-ban.cnn",
            "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170118203443-chris-murphy-super-tease.jpg",
            "publishedAt": null
        }
    ]
};
var html = '';
news.articles.forEach(function(item){
    html += '<span class="list-group-item">' + item.title + '</span>'
});
document.getElementById('newsHolder').innerHTML = html;
