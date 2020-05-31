const translate = require('google-translate-api');

async function rec (initialText, initialType, targetType) {
  const result0 = await translate(initialText, { from: initialType, to: targetType });
  const result1 = await translate(result0.text, { to: 'zh-cn' });
  return result1.text;
}

module.exports = {
  rec
};