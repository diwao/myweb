var cmn = {
  init : function(){
    var self = this;
    self.ua.init();
    self.win.init();
    self.browser.init();
    self.location.init();
  },
  ua : {
    init : function(){
      var self = this;
      var ua = null;
      var os = null;
      var isPC;
      var isSP;
      if(navigator.userAgent.match(/iPad/i)){
        ua = 'iPad';
        os = 'iOS';
        isSP = true;
      } else if( navigator.userAgent.match(/iPhone/i)){
        ua = 'iPhone';
        os = 'iOS';
        isSP = true;
      } else if (navigator.userAgent.match(/Android/i)) {
        if(navigator.userAgent.match(/Mobile/i)){
          ua = 'Android Mobile';
          os = 'Android';
        } else {
          ua = 'Android Tablet';
          os = 'Android';
        }
        isSP = true;
      } else {
        ua = 'PC';
        isPC = true;
      }
      self.device = ua;
      self.os = os;
      self.isSP = isSP;
      self.isPC = isPC;
    }
  },
  browser : {
    init: function(){
      var self = this;
      var ua = window.navigator.userAgent.toLowerCase();
      //ieかどうか判定
      self.isIE = (ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0);
      //firefoxかどうかの判定
      self.isFirefox = (ua.indexOf('firefox') >= 0);
      //chromeかどうかの判定
      self.isChrome = (ua.indexOf('chrome') >= 0);
      //safariかどうかの判定
      self.isSafari = (ua.indexOf('safari') >= 0) && !self.isChrome;
      //ieのバージョンを判定
      self.isIE8 = (ua.indexOf('msie 8.0') >= 0);
      self.isIE9 = (ua.indexOf('msie 9.0') >= 0);
      self.isIE10 = (ua.indexOf('msie 10.0') >= 0);
      self.isIE11 = (ua.indexOf('rv:11.0') >= 0) && self.isIE;
      self.isEdge = (ua.indexOf('edge') >= 0);
      // var browsers = ['isIE=' + self.isIE,'isFirefox=' + self.isFirefox,'isSafari=' + self.isSafari,'isChrome=' + self.isChrome,'isIE8=' + self.isIE8,'isIE9=' + self.isIE9,'isIE10=' + self.isIE10,'isIE11=' + self.isIE11,'isEdge=' + self.isEdge,ua];
      // console.log(browsers);
    }
  },
  win : {
    init : function(){
      var self = this;
      self.w = $(window).width();
      self.h = $(window).height();

      //android用のzoomとリサイズ
      // if (cmn.ua.os === 'Android') {
      //   $("html").css(
      //     {zoom: self.w / 320}
      //   );
      //   $(window).on('resize',function(){
      //     self.w = $(window).width();
      //     self.h = $(window).height();
      //   }).trigger('resize');
      // }
    },
    // スマホを傾けた時に引数で渡した関数を実行
    rotate : function(portrait,landscape) {
      $(window).on('orientationchange',function(){
        if (Math.abs(window.orientation) === 90) {
          landscape();
        } else {
          portrait();
        }
      });
    },
    //ウインドウフォーカス処理
    focus : function(on,off){
      $(window).on('focus', function(){
        on();
      }).on('blur', function(){
        off();
      });
    }
  },
  location : {
    init: function(){
      var self = this;
      self.root = self.getRootUrl();
      self.current = self.getCurrentDirectory();
    },
    //パラメータを取得
    getParam : function(name) {
      var url = location.href;
      var params;
      var param = [];
      var str = url.replace(/[?&]/g, '<>');
      params = str.split('<>');
      var i;
      for (i = 0; i < params.length; i++) {
        param.push(params[i].split('='));
      }
      for (i = 0; i < param.length; i++) {
        if (param[i][0] == name) {
          return param[i][1];//調べたパラメータがあればその値を返す
        }
      }
      return false;
    },
    //iframe内から親ウインドウのパラメータを取得
    getParentParam : function(name) {
      var url = parent.location.href;
      var params;
      var param = [];
      var str = url.replace(/[?&]/g, '<>');
      params = str.split('<>');
      var i;
      for (i = 0; i < params.length; i++) {
        param.push(params[i].split('='));
      }
      for (i = 0; i < param.length; i++) {
        if (param[i][0] == name) {
          return param[i][1];//調べたパラメータがあればその値を返す
        }
      }
      return false;
    },
    //rootのurlを取得
    getRootUrl : function(){
      var url = location.protocol+'//'+location.host;
      return url;
    },
    //そのページのディレクトリを含めたurlを取得
    getCurrentDirectory : function(){
      var path = location.protocol+'//'+location.host+location.pathname;
      return path;
    }
  },
  cookie : {
    //cookieをセット（timeは日数を渡す）
    set : function(name,value,time){
      var date = new Date();
      var expire = 24*60*60*1000*time;
      date.setTime(date.getTime() + expire);
      expire = date.toUTCString();
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expire + '; path=/';
    },
    //cookieを取得
    get : function(name){
      var cookie;
      var cookies = document.cookie.split(';');
      for(var i = 0; i < cookies.length; i++){
        cookie = cookies[i].split('=');
        cookie[0] = cookie[0].replace(/^\s+|\s+$/g, '');
        if(cookie[0] == name){
          return cookie[1];//調べたcookieがあればその値を返す
        }
      }
      return false;//なければfalseを返す
    }
  },
  //画像のON・OFF
  imgOn : function() {
    var onEvent,offEvent;
    if(cmn.ua.isSP){
      onEvent = 'touchstart';
      offEvent = 'touchend';
    } else {
      onEvent = 'mouseover';
      offEvent = 'mouseleave';
    }
    $('html').on(onEvent,'.imgOn',function(){
      var src = $(this).attr('src');
      var srcOn = src.replace(/^(.+)_off(\.[^\.]+)$/, '$1_on$2');
      $(this).attr('src',srcOn);
    }).on(offEvent,'.imgOn',function(){
      var src = $(this).attr('src');
      var srcOff = src.replace(/^(.+)_on(\.[^\.]+)$/, '$1_off$2');
      $(this).attr('src',srcOff);
    });
  },
  //pxを抜く
  css2num : function(str){
    if(str === undefined){
      str = 0;
    }
    str = str.replace('px','');
    return parseInt(str,10);
  },
  //FBシェア
  shareFB: function(ttl,txt,img,link){
    if(img.indexOf('http://') == -1 && img.indexOf('https://') == -1){
      img    = location.protocol+'//'+location.host+'/'+img;
    }
    var url = link;
    if (url === undefined) {
      url = '';
    }
    FB.ui({
      method  : 'feed',
      name  : ttl,
      link  : url,
      picture  : img,
      description : txt
    }, function(response) {
      if (response && response.post_id) {
        // ポストに成功
      } else {
        // ポストに失敗
      }
    });
  },
  //min〜maxの乱数を取得
  getRandom : function(min,max){
    var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
    return rand;
  },
  //配列をランダムで並び替える
  shuffleArray : function(array) {
    var n = array.length;
    var t;
    var i;
    while(n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  },
  // カンマ区切り数値
  commaSeparatedValue : function(value) {
    var arr = value.toString().split('.');
    arr[0] = arr[0].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    return arr.join('.');
  },
  // 現在日付の月日を4文字で取得
  getMMDD : function() {
    var now = new Date();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var result = '';
    if (m < 10) {
      result += '0' + m.toString();
    } else {
      result += m.toString();
    }
    if (d < 10) {
      result += '0' + d.toString();
    } else {
      result += d.toString();
    }
    return result;
  },
  //小数点込みのcss要素を取得
  getFloatCssById : function(id,css){
    var elem = document.getElementById(id);
    var style = document.defaultView.getComputedStyle(elem,'');
    var value = style[css];
    //pxを抜く
    value  = value.replace('px','');
    return parseFloat(value,10);
  }
};
