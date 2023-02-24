const {
    expect,
  } = require('chai');
  const getPaymentTokenFromAPI = require('./6-payment_token');

  it('should resolve with a data object when true', () => {
    getPaymentTokenFromAPI(true).then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.property('data');
      done();
    });
  });

  describe('getPaymentTokenFromAPI', () => {
    it('should return a Promise', () => {
      const result = getPaymentTokenFromAPI();
      expect(result).to.be.an.instanceof(Promise);
  });

  it('should reject with doing nothing when false', () => {
    getPaymentTokenFromAPI(false).then(data => {
      expect(data).to.equal('');
      done();
    });
  });
});
