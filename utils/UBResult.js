class UBResult {
  constructor(suc, dataOrErr) {
    this.suc = suc;
    if (suc === true) {
      this.data = dataOrErr;
    } else {
      this.error = dataOrErr;
    }
  }
}



module.exports = UBResult;
