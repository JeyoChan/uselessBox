

const curType = [
  'bjh'
];

const allSpecialVal = /[^`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g;

class FYTransForm {
  constructor(finalType) {
    this.finalType = finalType;
  }

  bjhTransform(initialSentence) {
    if (this.finalType !== 'bjh') {
      return null;
    }
    const strArr = initialSentence.split(' ');
    const lastArr = strArr.map((str) => {
      if (str.length === 0) {
        return '';
      }
      return str.replace(allSpecialVal, val => val + '儿');
    });
    const finalSentence = lastArr.join(' ');
    return finalSentence;
  }
}

module.exports = {
  FYTransForm,
  curType
};
