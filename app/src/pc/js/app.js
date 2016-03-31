var app = {
  init: function(){
    // console.log('初期化');
    var date = new Date();
    var element = document.getElementById('time');

    function getTime(date) {
      return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }

    element.innerHTML = getTime(date);
  }
};

$(function(){
  app.init();
  cmn.init();
});
