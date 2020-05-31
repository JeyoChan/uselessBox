const translate = require('google-translate-api');

async function rec (initialText, initialType, middleType, times) {
  let text = initialText;
  for(let i = 0; i < times; i += 1) {
    const result0 = await translate(text, { from: initialType, to: middleType });
    const result1 = await translate(result0.text, { to: 'zh-cn' });
    text = result1.text;
  }
  return result1.text;
}

module.exports = {
  rec
};