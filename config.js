// パスなどの設定を記述
module.exports = {
  // 開発ディレクトリ
  src: 'app/src',
  // 納品物ディレクトリ
  pub: 'app/public',
  // ejs
  ejs: {
    data: {
      title: 'サイト名',
      author: '著者',
      description: 'このサイトの説明',
      keywords: 'キーワード',
      favicon: '',
      og: {
        siteName: 'サイト名',
        description: 'このサイトの説明',
        url: '',
        image: ''
      },
      root: '/'
    },
    settings : {
      ext: '.html'
    }
  },
  // sass
  sass: {
    options: {
      outputStyle: 'nested',
      sourceMap: true,
      sourceComment: false
    }
  },
  // autoprefixer
  autoprefixer: {
    options: {
      browsers: ['last 3 version', 'ie >= 9', 'Android 4.0']
    }
  },
  // sprite
  sprite: {
    options: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '/pc/img/sprite.png',
      cssFormat: 'scss',
      cssVarMap: function (sprite) {
        sprite.name = 'sprite-' + sprite.name;
      }
    }
  },

  // 各種パス
  path: {
    html: {
      src: 'app/public/**/*.html'
    },
    eslint: {
      src: ['app/src/**/*.js','!app/src/**/lib/*.js','!app/src/**/*.min.js']
    },
    ejs: {
      srcPC: ['app/src/pc/ejs/**/*.ejs', '!app/src/pc/ejs/**/_*.ejs'],
      destPC: 'app/public',
      srcSP: ['app/src/sp/ejs/**/*.ejs', '!app/src/sp/ejs/**/_*.ejs'],
      destSP: 'app/public/sp',
      watch: ['app/src/**/*.ejs','!app/src/**/_*.ejs']
    },
    script: {
      base: 'app/src/',
      src: ['app/src/**/*.js','!app/src/**/lib/*.js'],
      dest: 'app/public'
    },
    style: {
      srcPC: 'app/src/pc/sass/**/*.scss',
      destPC: 'app/public/pc/css',
      srcSP: 'app/src/sp/sass/**/*.scss',
      destSP: 'app/public/sp/css',
      watch: 'app/src/**/*.scss'
    },
    sprite: {
      src: 'app/sprite/img/*',
      dest: 'app/sprite/dest/'
    },
    copy: {
      base: 'app/src',
      src: ['app/src/**/*.png',
            'app/src/**/*.jpg',
            'app/src/**/*.gif',
            'app/src/**/*.ico',
            'app/src/**/*.php',
            'app/src/**/*.json',
            '!sprite/**/*.png'
          ],
      dest: 'app/public'
    },
    concatLib: {
      src: [
        'app/src/common/lib/jquery-2.1.4.min.js',
        'app/src/common/lib/TweenMax.min.js',
        'app/src/common/lib/TimelineMax.min.js',
        'app/src/common/lib/imagesloaded.min.js',
        'app/src/common/lib/howler.min.js'
      ],
      dest: 'app/public/common/js/'
    },
    optimizeScript: {
      src: [
        'app/src/common/js/ga.js',
        'app/src/common/js/common.js'
        // 'app/src/common/js/audio.js'
      ],
      dest: 'app/public/common/js/'
    },
    babel: {
      base: 'app/src/',
      src: 'app/src/**/*.es6',
      dest: 'app/public',
      watch: 'app/src/**/*.es6'
    }
  }
};
