let obj = { property: 'original value' };

module.exports = {
  getObj: function() {
    return obj;
  },
  setObj: function(newObj) {
    obj = newObj;
    return obj
  }
};
