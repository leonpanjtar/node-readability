var read = require('../')

require('events').EventEmitter.prototype._maxListeners = 100;

var uri = 'https://www.nytimes.com/2017/02/01/us/politics/neil-gorsuch-supreme-court-trump.html';
// 'http://www.cq.xinhuanet.com/2016-03/28/c_1118467794.htm'
// 'http://media.china.com.cn/gdxw/2016-03-16/665392.html'
// 'http://www.cq.xinhuanet.com/2016-03/28/c_1118465265.htm'
read(uri, {
  timeout: 15000,
  output: {
    type: 'text',
    stripSpaces: true,
    break: true
  },
  maxRedirects: 20,
  jar: true
}, function (err, art, options, resp) {
  if (err) {
    console.log('[ERROR]', err.message)
    return
  }
  if (!art) {
    console.log('[WARNING] article not exist')
    return
  }

  /* eslint-disable no-unused-vars */
  var title = art.title
  var content = art.content
  var quote = art.quote
  /* eslint-enable no-unused-vars */
  console.log(title)
  console.log(content)
  console.log(quote)
})
