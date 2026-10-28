/* Shared by every page in pages/: builds the top bar with the search, the card grid on the home page, the audio buttons and the footer.
   To add a grammar point: add one line to its category below. [file name without .html, pattern, short description]
   Categories run in learning order, and so do the points inside each one. A category with no pages yet doesn't show.
   The short description shows on the home grid card AND under the pattern on the page itself (filled in below), so it only lives here. */
var INDEX = [
  {level: 'N5', cats: [
    {cat: 'First steps', pages: [
      ['desu', 'です / だ', 'To be, is'],
      ['janai', 'じゃない・ではありません', 'Is not'],
      ['deshita', 'でした・だった', 'Was'],
      ['janakatta', 'じゃなかった・ではありませんでした', 'Was not'],
      ['wa', 'は', 'Topic marker: "as for..."'],
      ['ka', 'か', 'Question marker'],
      ['kore-sore-are', 'これ・それ・あれ', 'This, that, that over there'],
      ['kono-sono-ano', 'この・その・あの', 'This ___, that ___ (before a noun)'],
      ['koko-soko-asoko', 'ここ・そこ・あそこ', 'Here, there, over there'],
      ['kochira-sochira-achira', 'こちら・そちら・あちら', 'This way, that way (polite here, there)'],
      ['gaaru', 'がある', 'To be, there is'],
      ['gairu', 'がいる', 'There is (people, animals)'],
      ['tachi', '～たち', 'Plural for people: 私たち, 子どもたち']
    ]},
    {cat: 'Question words', pages: [
      ['nani', '何 (なに・なん)', 'What'],
      ['dare', '誰 (だれ)・どなた', 'Who (polite: どなた)'],
      ['doko', 'どこ', 'Where'],
      ['itsu', 'いつ', 'When'],
      ['dore-dono', 'どれ・どの', 'Which (of three or more)'],
      ['dochira', 'どちら・どっち', 'Which (of two), which way'],
      ['dou', 'どう・いかが', 'How, how about'],
      ['donna', 'どんな', 'What kind of'],
      ['doushite', 'どうして・なぜ', 'Why (casual: なんで)'],
      ['ikura', 'いくら', 'How much (money)'],
      ['ikutsu', 'いくつ', 'How many, how old'],
      ['nanika', '何か・誰か・どこか', 'Something, someone, somewhere'],
      ['nanimo', '何も・誰も・どこも', 'Nothing, nobody, nowhere (+ negative)']
    ]},
    {cat: 'Particles', pages: [
      ['mo', 'も', 'Also, too'],
      ['to', 'と', 'And: joining nouns'],
      ['ya', 'や', 'And: listing examples (among others)'],
      ['ka-or', 'か (Or)', 'Or: joining nouns'],
      ['ga', 'が', 'Subject marker'],
      ['wo', 'を', 'Object marker'],
      ['ni', 'に', 'In, at, to, for, on'],
      ['he', 'へ', 'Towards, to (direction)'],
      ['de', 'で', 'At, in'],
      ['to-with', 'と (With)', 'With: doing something together'],
      ['no-pos', 'の (Possession)', 'Possession: my, \'s'],
      ['kara', 'から (From)', 'From: starting point (place, time, person)'],
      ['made', 'まで', 'Until, up to, even'],
      ['dake', 'だけ', 'Only, just'],
      ['shika', 'しか～ない', 'Only, nothing but (+ negative)'],
      ['kurai', 'ぐらい・くらい', 'About, roughly (どのくらい: how much?)'],
      ['goro', 'ごろ (頃)', 'Around (a time)']
    ]},
    {cat: 'Sentence endings', pages: [
      ['yo', 'よ', 'Telling someone something new'],
      ['ne', 'ね', 'Sharing a feeling: "right?", "huh"'],
      ['yone', 'よね', '"Right?" when you\'re fairly sure'],
      ['deshou', 'でしょう', 'Probably, right?'],
      ['darou', 'だろう', 'Probably, I wonder (masculine "right?")']
    ]},
    {cat: 'Adjectives', pages: [
      ['i-adj', 'い-Adjective', 'Describing words that end in い'],
      ['ii', 'いい (良い)', 'い-Adjective meaning "good"'],
      ['na-adj', 'な-Adjective', 'Describing words: な before a noun'],
      ['i-adj-neg', 'い-Adjective (Negative)', 'Isn\'t: くない'],
      ['i-adj-past', 'い-Adjective (Past)', 'Was: the past of い-adjectives'],
      ['i-adj-past-neg', 'い-Adjective (Past negative)', 'Wasn\'t: くなかった'],
      ['suki-kirai', '好き・嫌い', 'Like, dislike (～が好き)'],
      ['naru', '～くなる・～になる', 'To become, to get (bigger, colder...)'],
      ['ichiban', '一番 (いちばん)', 'The most, number one']
    ]},
    {cat: 'Adverbs', pages: [
      ['totemo', 'とても', 'Very'],
      ['mou', 'もう', 'Already, not anymore'],
      ['mada', 'まだ', 'Still, not yet']
    ]},
    {cat: 'Verbs: basic forms', pages: [
      ['masu', 'ます', 'Polite verb endings'],
      ['u-verb', 'う-Verb (Dictionary)', 'Godan verbs: plain and polite'],
      ['ru-verb-neg', 'る-Verb (Negative)', 'Not doing: ない and ません'],
      ['u-verb-neg', 'う-Verb (Negative)', 'Not doing: u sound → a + ない'],
      ['ru-verb-past', 'る-Verb (Past)', 'Did: た and ました'],
      ['kuru', '来る', 'To come (irregular verb)'],
      ['suru', 'する', 'To do (irregular verb)'],
      ['ni-iku', '～に行く・～に来る', 'Go to do, come to do']
    ]},
    {cat: 'て-form', pages: []},
    {cat: 'Wanting and inviting', pages: [
      ['tai', '～たい', 'Want to (do something)'],
      ['mashou', '～ましょう', 'Let\'s (casual: ～よう)'],
      ['tsumori', '～つもりだ', 'Plan to, intend to']
    ]},
    {cat: 'Giving and receiving', pages: [
      ['morau', 'もらう (貰う)', 'To get, to receive'],
      ['ageru', 'あげる', 'To give (to someone else)'],
      ['kureru', 'くれる・てくれる', 'Someone gives me, does something for me']
    ]},
    {cat: 'Joining sentences', pages: [
      ['demo', 'でも', 'But (start of a sentence)'],
      ['ga-but', 'が (But)', 'But, however (polite)'],
      ['kedo', 'けど・けれども', 'But (everyday)'],
      ['kara-because', 'から (Because)', 'Because, so: giving a reason'],
      ['mae-ni', '～前に', 'Before doing something']
    ]},
    {cat: 'Explaining (の)', pages: [
      ['no', '～の', 'Asking for the story behind something'],
      ['ndesu', '～んです・のです', 'Explaining, giving the reason'],
      ['noha-noga', 'のは・のが', 'Turning an action into a noun']
    ]}
  ]}
];
var UPDATED = '26 Oct 2026';

(function(){
  // index.html (made by build.py) has every page in one file, so links switch pages instead of loading files
  var BUNDLE = !!window.BUNDLE;
  var href = function(id){ return BUNDLE ? '#' + id : id + '.html'; };

  // every point, for the grid and the search; k is what the search matches (file name, pattern, description)
  var points = [];
  INDEX.forEach(function(g){
    g.pages = [].concat.apply([], g.cats.map(function(c){ return c.pages; }));
    g.pages.forEach(function(p){
      points.push({id: p[0], pat: p[1], d: p[2], level: g.level, k: (p[0] + ' ' + p[1] + ' ' + p[2]).toLowerCase()});
    });
  });
  var count = points.length;


  var top = document.getElementById('top');
  top.innerHTML =
    '<a class="brand" href="' + href('start') + '"><span class="label">文法ノート</span><span class="t">Wabisebi Grammar Notebook</span></a>' +
    '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="menu"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '<div class="menu" id="menu">' +
    '<a class="nav" href="' + href('home') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg> Grammar</a>' +
    '<a class="nav" href="' + href('kana') + '">あ Hiragana</a>' +
    '<a class="nav" href="' + href('katakana') + '">ア Katakana</a>' +
    '<a class="nav" href="' + href('kanji') + '">字 Kanji</a>' +
    '<a class="nav" href="' + href('numbers') + '">数 Numbers &amp; Dates</a>' +
    '<a class="nav" href="' + href('kana-game') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10a5 5 0 0 1 4.9 4l1 5a2.6 2.6 0 0 1-4.4 2.3L16.4 16H7.6l-3.1 2.3A2.6 2.6 0 0 1 .1 16l1-5A5 5 0 0 1 7 7z"/><path d="M7.5 10v3M6 11.5h3"/><circle cx="15.5" cy="10.6" r=".6"/><circle cx="17.7" cy="12.6" r=".6"/></svg> Kana Game</a>' +
    '<a class="nav" href="' + href('resources') + '">棚 Resources</a>' +
    '<div class="find"><input id="find" type="search" placeholder="Search: は, topic, wa…" aria-label="Search grammar" autocomplete="off">' +
      '<ol class="results" id="results" hidden></ol></div>' +
    '</div>';

  // phones: the links and search fold into a menu behind the ☰ button
  var burger = top.querySelector('.burger');
  function setMenu(open){
    top.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    burger.querySelector('path').setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16');
  }
  burger.addEventListener('click', function(){ setMenu(!top.classList.contains('open')); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function(e){ if (!top.contains(e.target)) setMenu(false); });

  // home page: every grammar point as a card, grouped by level
  var grid = document.getElementById('grid');
  if (grid) {
    grid.innerHTML = INDEX.map(function(g){
      var cards = function(pages){ return pages.map(function(p){
        return '<li><a class="gcard" href="' + href(p[0]) + '" data-k="' + (p[0] + ' ' + p[1] + ' ' + p[2]).toLowerCase() + '">' +
          '<span class="p">' + p[1] + '</span><span class="d">' + p[2] + '</span><span class="lv ' + g.level.toLowerCase() + '">' + g.level + '</span></a></li>';
      }).join(''); };
      var cats = g.cats.filter(function(c){ return c.pages.length; }).map(function(c){
        return '<section class="cat"><h3 class="label">' + c.cat + '</h3><ol class="cards">' + cards(c.pages) + '</ol></section>';
      }).join('');
      return '<details class="level" open><summary><span class="t">' + g.level + '</span><span class="label">' + g.pages.length + (g.pages.length === 1 ? ' grammar point' : ' grammar points') + '</span></summary>' +
        cats + '</details>';
    }).join('') + '<p class="empty" id="gnone" hidden>No match.</p>';
  }
  var filterGrid = function(q){
    if (!grid) return;
    var any = false;
    grid.querySelectorAll('.gcard').forEach(function(a){
      var m = !q || a.getAttribute('data-k').indexOf(q) > -1;
      a.parentNode.hidden = !m; if (m) any = true;
    });
    grid.querySelectorAll('.cat').forEach(function(c){
      c.hidden = !c.querySelector('li:not([hidden])');
    });
    grid.querySelectorAll('.level').forEach(function(l){
      l.hidden = !l.querySelector('li:not([hidden])');
      if (q) l.open = true;
    });
    document.getElementById('gnone').hidden = any;
  };
  var onHome = function(){ var h = document.getElementById('home'); return !!h && !h.hidden; };

  // search: on the home page it filters the cards, on other pages it drops down a list of matches
  var find = document.getElementById('find'), results = document.getElementById('results');
  find.addEventListener('input', function(){
    var q = find.value.trim().toLowerCase();
    if (onHome()) { filterGrid(q); results.hidden = true; return; }
    if (!q) { results.hidden = true; return; }
    var m = points.filter(function(p){ return p.k.indexOf(q) > -1; });
    results.innerHTML = m.length ? m.map(function(p){
      return '<li><a href="' + href(p.id) + '"><span>' + p.pat + '</span>' + (p.d ? '<span class="d">' + p.d + '</span>' : '') + '</a></li>';
    }).join('') : '<li class="empty">No match.</li>';
    results.hidden = false;
  });
  find.addEventListener('keydown', function(e){
    if (e.key === 'Enter') { var a = results.hidden ? null : results.querySelector('a'); if (a) a.click(); }
    if (e.key === 'Escape') { find.value = ''; filterGrid(''); results.hidden = true; }
  });
  document.addEventListener('click', function(e){
    if (!e.target.closest('.find')) results.hidden = true;
  });

  var foot = document.getElementById('foot');
  if (foot) foot.textContent = 'Updated ' + UPDATED + ' · ' + count + ' grammar points';

  // the short description under each page's pattern comes from INDEX, so it always matches the grid card
  points.forEach(function(p){
    var page = document.getElementById(p.id), sub = page && page.querySelector('.sub');
    if (sub) sub.textContent = p.d;
  });

  // inside the Claude panel media/ can't load: swap the broken image for a short hint
  if (location.protocol === 'data:') {
    document.querySelectorAll('.mine img, .lead img').forEach(function(img){
      var p = document.createElement('p');
      p.className = 'src';
      p.textContent = 'Image and audio show when you open index.html in Safari or Chrome.';
      img.replaceWith(p);
    });
  }

  document.querySelectorAll('.play').forEach(function(b){
    var a = new Audio(b.getAttribute('data-src'));
    b.addEventListener('click', function(){
      if (a.paused) { a.currentTime = 0; a.play(); } else a.pause();
    });
    a.addEventListener('play', function(){ b.classList.add('on'); });
    a.addEventListener('pause', function(){ b.classList.remove('on'); });
  });


  // stroke order (hiragana chart): KanjiVG strokes are drawn one by one over the same strokes shown faintly
  function showStrokes(strokeBox, ch){
    var chars = ch.split(''), n = 0, ghost = '', live = '', i, j, d;
    for (i = 0; i < chars.length; i++) {
      d = (typeof STROKES !== 'undefined' && STROKES[chars[i]]) || [];
      ghost += '<g transform="translate(' + i * 109 + ' 0)">'; live += '<g transform="translate(' + i * 109 + ' 0)">';
      for (j = 0; j < d.length; j++, n++) {
        ghost += '<path d="' + d[j] + '"/>';
        live += '<path d="' + d[j] + '" pathLength="1" style="animation-delay:' + (n * .9) + 's"/>';
      }
      ghost += '</g>'; live += '</g>';
    }
    strokeBox.querySelector('.sv').innerHTML = n
      ? '<svg viewBox="0 0 ' + chars.length * 109 + ' 109" role="img" aria-label="Stroke order of ' + ch + '"><g class="ghost">' + ghost + '</g><g class="live">' + live + '</g></svg>'
      : '<div class="plain">' + ch + '</div>';
    strokeBox.querySelector('.note').textContent = n ? n + ' strokes' : 'Stroke order coming soon';
    strokeBox.querySelector('.replay').style.visibility = n ? 'visible' : 'hidden';
    strokeBox.dataset.ch = ch;
  }
  document.querySelectorAll('.stroke-panel').forEach(function(strokeBox){
    strokeBox.innerHTML = '<div class="sv"></div><div class="side"><span class="note"></span><button class="replay" type="button">Replay</button><a class="credit" href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">Stroke data: KanjiVG, CC BY-SA 3.0</a></div>';
    strokeBox.querySelector('.replay').addEventListener('click', function(){ showStrokes(strokeBox, strokeBox.dataset.ch); });
    showStrokes(strokeBox, strokeBox.dataset.first);
    // kanji chart: the tiles carry their readings, shown under the animation
    var first = [].find.call(strokeBox.closest('.kana-board').querySelectorAll('.kana[data-on]'), function(b){ return b.querySelector('.k').textContent === strokeBox.dataset.first; });
    if (first) {
      strokeBox.classList.add('has-yomi');
      strokeBox.insertAdjacentHTML('beforeend', '<dl class="yomi"><dt>On\'yomi</dt><dd class="on"></dd><dt>Kun\'yomi</dt><dd class="kun"></dd><dt>Examples</dt><dd class="words"></dd></dl>');
      showYomi(strokeBox, first);
      // on phones the panel is a bottom sheet: a tile opens it, × or Esc closes it
      var board = strokeBox.closest('.kana-board');
      strokeBox.insertAdjacentHTML('afterbegin', '<button class="sheet-close" type="button" aria-label="Close">×</button>');
      strokeBox.querySelector('.sheet-close').addEventListener('click', function(){ board.classList.remove('sheet-open'); });
      document.addEventListener('keydown', function(e){ if (e.key === 'Escape') board.classList.remove('sheet-open'); });
    }
  });
  // kanji chart: the on/kun explainer starts folded on phones
  if (window.matchMedia('(max-width:720px)').matches) document.querySelectorAll('details.onkun').forEach(function(d){ d.removeAttribute('open'); });
  // common readings first, the rare ones smaller and faded after them; example words with the kanji and its sound marked
  function showYomi(strokeBox, b){
    function list(common, rare){
      var c = common === '-' ? '' : common.split('・').join('、');
      var r = rare ? rare.split('・').join('、') : '';
      return (c || (r ? '' : '–')) + (r ? '<span class="rare">' + (c ? '、' : '') + r + '</span>' : '');
    }
    var ch = b.querySelector('.k').textContent;
    strokeBox.querySelector('.yomi .on').innerHTML = list(b.dataset.on, b.dataset.onRare);
    strokeBox.querySelector('.yomi .kun').innerHTML = list(b.dataset.kun, b.dataset.kunRare);
    strokeBox.querySelector('.yomi .words').innerHTML = b.dataset.words.split('、').map(function(x){
      var p = x.split(':');
      return '<span class="w"><span class="wj">' + p[0].split(ch).join('<mark>' + ch + '</mark>') + '</span><span class="wr">' + p[1].replace('[', '<mark>').replace(']', '</mark>') + '</span><span class="we">' + p[2] + '</span></span>';
    }).join('');
  }

  // kana charts: the tile you tap turns gold and its stroke order plays (the sounds were removed on 24 Oct 2026)
  var kanaOn = null;
  document.querySelectorAll('.kana:not(.gap)').forEach(function(b){
    b.addEventListener('click', function(){
      if (kanaOn) kanaOn.classList.remove('on');
      kanaOn = b; b.classList.add('on');
      var sp = b.closest('.kana-board').querySelector('.stroke-panel');
      if (sp) showStrokes(sp, b.querySelector('.k').textContent);
      if (sp && b.dataset.on) { showYomi(sp, b); b.closest('.kana-board').classList.add('sheet-open'); }
    });
  });
  // one toggle per chart (hiragana, katakana, kanji), each hides only its own romaji (or meanings, on the kanji chart)
  document.querySelectorAll('.romaji-toggle').forEach(function(romaji){
    romaji.addEventListener('click', function(){
      var off = romaji.closest('.kana-board').classList.toggle('no-romaji');
      romaji.textContent = (romaji.dataset.label || 'Romaji') + ': ' + (off ? 'off' : 'on');
      romaji.setAttribute('aria-pressed', String(!off));
    });
  });

  // kana game: type the romaji of the kana shown. Tile data is here (not read from the chart pages) so it works in index.html too.
  var gameCard = document.getElementById('game-kana');
  if (gameCard) (function(){
    function pairs(kana, rom){ return kana.split(' ').map(function(k, i){ return [k, rom[i]]; }); }
    var HB = pairs('あ い う え お か き く け こ さ し す せ そ た ち つ て と な に ぬ ね の は ひ ふ へ ほ ま み む め も や ゆ よ ら り る れ ろ わ を ん',
      'a i u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo n'.split(' '));
    var HD = pairs('が ぎ ぐ げ ご ざ じ ず ぜ ぞ だ ぢ づ で ど ば び ぶ べ ぼ ぱ ぴ ぷ ぺ ぽ',
      'ga gi gu ge go za ji zu ze zo da ji zu de do ba bi bu be bo pa pi pu pe po'.split(' '));
    var HC = pairs('きゃ きゅ きょ しゃ しゅ しょ ちゃ ちゅ ちょ にゃ にゅ にょ ひゃ ひゅ ひょ みゃ みゅ みょ りゃ りゅ りょ ぎゃ ぎゅ ぎょ じゃ じゅ じょ びゃ びゅ びょ ぴゃ ぴゅ ぴょ',
      'kya kyu kyo sha shu sho cha chu cho nya nyu nyo hya hyu hyo mya myu myo rya ryu ryo gya gyu gyo ja ju jo bya byu byo pya pyu pyo'.split(' '));
    // other spellings that are fine too
    var ALT = {si:'shi', ti:'chi', tu:'tsu', hu:'fu', zi:'ji', nn:'n', sya:'sha', syu:'shu', syo:'sho', tya:'cha', tyu:'chu', tyo:'cho',
      jya:'ja', jyu:'ju', jyo:'jo', zya:'ja', zyu:'ju', zyo:'jo'};
    // ぢ and づ sound like じ and ず, but type as di and du on a Japanese keyboard
    var DU = {'ぢ': 'di', 'ヂ': 'di', 'づ': 'du', 'ヅ': 'du'};
    function answers(p){
      var a = [p[1]];
      Object.keys(ALT).forEach(function(k){ if (ALT[k] === p[1]) a.push(k); });
      if (DU[p[0]]) a.push(DU[p[0]]);
      return a;
    }
    function kata(s){ return s.replace(/[ぁ-ゖ]/g, function(c){ return String.fromCharCode(c.charCodeAt(0) + 0x60); }); }
    function toKata(list){ return list.map(function(p){ return [kata(p[0]), p[1]]; }); }
    var SETS = { hira: HB, kata: toKata(HB), dakuten: [], combo: [] };
    var on = { hira: true, kata: false, dakuten: false, combo: false };
    // remember the chosen scripts and fonts between visits (skipped quietly if the browser blocks storage)
    var SAVE = 'wabisebi-kana-game';
    try {
      var saved = JSON.parse(localStorage.getItem(SAVE) || 'null');
      if (saved && saved.on) Object.keys(on).forEach(function(k){ if (k in saved.on) on[k] = !!saved.on[k]; });
      if (!on.hira && !on.kata) on.hira = true;
    } catch (err) {}
    function save(){ try { localStorage.setItem(SAVE, JSON.stringify({on: on, fonts: Object.keys(fontOn)})); } catch (err) {} }

    // Japanese fonts: Google Fonts (same on every system, needs internet), each with a system font as fallback for offline
    var SANS = '"Hiragino Sans","Yu Gothic","Noto Sans CJK JP",sans-serif', SERIF = '"Hiragino Mincho ProN","Yu Mincho","Noto Serif CJK JP",serif';
    var FONTS = [
      {n: 'IBM Plex Sans JP', f: '"IBM Plex Sans JP",' + SANS, w: 500},
      {n: 'Noto Sans JP', f: '"Noto Sans JP",' + SANS, w: 500, q: 'Noto+Sans+JP:wght@500'},
      {n: 'Noto Serif JP', f: '"Noto Serif JP",' + SERIF, w: 500, q: 'Noto+Serif+JP:wght@500'},
      {n: 'Zen Maru Gothic', f: '"Zen Maru Gothic",' + SANS, w: 500, q: 'Zen+Maru+Gothic:wght@500'},
      {n: 'Kiwi Maru', f: '"Kiwi Maru",' + SANS, w: 500, q: 'Kiwi+Maru:wght@500'},
      {n: 'Klee One', f: '"Klee One",' + SANS, w: 600, q: 'Klee+One:wght@600'},
      {n: 'Zen Kurenaido', f: '"Zen Kurenaido",' + SANS, w: 400, q: 'Zen+Kurenaido'},
      {n: 'Yomogi', f: '"Yomogi",' + SANS, w: 400, q: 'Yomogi'},
      {n: 'Yuji Syuku', f: '"Yuji Syuku",' + SERIF, w: 400, q: 'Yuji+Syuku'},
      {n: 'Hachi Maru Pop', f: '"Hachi Maru Pop",' + SANS, w: 400, q: 'Hachi+Maru+Pop'},
      {n: 'Dela Gothic One', f: '"Dela Gothic One",' + SANS, w: 400, q: 'Dela+Gothic+One'},
      {n: 'M PLUS Rounded 1c', f: '"M PLUS Rounded 1c",' + SANS, w: 500, q: 'M+PLUS+Rounded+1c:wght@500'},
      {n: 'Kosugi Maru', f: '"Kosugi Maru",' + SANS, w: 400, q: 'Kosugi+Maru'},
      {n: 'Sawarabi Mincho', f: '"Sawarabi Mincho",' + SERIF, w: 400, q: 'Sawarabi+Mincho'},
      {n: 'Zen Antique', f: '"Zen Antique",' + SERIF, w: 400, q: 'Zen+Antique'},
      {n: 'Yusei Magic', f: '"Yusei Magic",' + SANS, w: 400, q: 'Yusei+Magic'},
      {n: 'RocknRoll One', f: '"RocknRoll One",' + SANS, w: 400, q: 'RocknRoll+One'},
      {n: 'Reggae One', f: '"Reggae One",' + SANS, w: 400, q: 'Reggae+One'},
      {n: 'Potta One', f: '"Potta One",' + SANS, w: 400, q: 'Potta+One'},
      {n: 'DotGothic16', f: '"DotGothic16",' + SANS, w: 400, q: 'DotGothic16'}
    ];
    var fontOn = {0: true};
    try {
      var sf = (JSON.parse(localStorage.getItem(SAVE) || 'null') || {}).fonts;
      if (sf && sf.length) { fontOn = {}; sf.forEach(function(i){ if (FONTS[i]) fontOn[i] = true; }); }
      if (!Object.keys(fontOn).length) fontOn = {0: true};
    } catch (err) {}
    var fl = document.createElement('link');
    fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?' + FONTS.filter(function(f){ return f.q; }).map(function(f){ return 'family=' + f.q; }).join('&') + '&display=swap';
    document.head.appendChild(fl);
    var fontBox = document.getElementById('game-fonts');
    FONTS.forEach(function(f, i){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'ftile'; b.title = f.n; b.setAttribute('aria-label', f.n);
      b.setAttribute('aria-pressed', String(!!fontOn[i]));
      b.style.fontFamily = f.f; b.style.fontWeight = f.w; b.textContent = 'あ';
      b.addEventListener('click', function(){
        if (fontOn[i]) delete fontOn[i]; else fontOn[i] = true;
        if (!Object.keys(fontOn).length) fontOn[i] = true;   // keep at least one font on
        syncFonts(); save();
      });
      fontBox.appendChild(b);
    });
    // one button for the fonts: "Use all fonts" when some are off, "Reset to default" when all are on (the first font stays, one must remain)
    var allBtn = document.getElementById('game-fonts-all');
    function syncFonts(){
      [].forEach.call(fontBox.children, function(t, j){ t.setAttribute('aria-pressed', String(!!fontOn[j])); });
      allBtn.textContent = Object.keys(fontOn).length === FONTS.length ? 'Reset to default' : 'Use all fonts';
    }
    allBtn.addEventListener('click', function(){
      var all = Object.keys(fontOn).length === FONTS.length;
      fontOn = {};
      if (all) fontOn[0] = true; else FONTS.forEach(function(f, i){ fontOn[i] = true; });
      syncFonts(); save();
    });
    syncFonts();
    function pickFont(){
      var ids = Object.keys(fontOn), f = FONTS[ids[Math.floor(Math.random() * ids.length)]];
      gameCard.style.fontFamily = f.f; gameCard.style.fontWeight = f.w;
    }

    var card = gameCard.closest('.game-card'), input = document.getElementById('game-input');
    var msg = document.getElementById('game-msg'), scoreEl = document.getElementById('game-score');
    var cur = null, last = null, waiting = false, right = 0, total = 0, streak = 0, again = [];

    function pool(){
      var out = [];
      'hira kata'.split(' ').forEach(function(s){
        if (on[s]) out = out.concat(SETS[s]);
        if (on[s] && on.dakuten) out = out.concat(s === 'hira' ? HD : toKata(HD));
        if (on[s] && on.combo) out = out.concat(s === 'hira' ? HC : toKata(HC));
      });
      return out;
    }
    function next(){
      var p = pool();
      if (!p.length) { on.hira = true; syncChips(); p = pool(); }
      var pick;
      // a missed kana comes back after a few others
      if (again.length && Math.random() < 0.3) pick = again.shift();
      else do { pick = p[Math.floor(Math.random() * p.length)]; } while (p.length > 1 && last && pick[0] === last[0]);
      cur = pick; last = pick; waiting = false;
      gameCard.textContent = pick[0]; pickFont();
      input.value = ''; input.disabled = false; input.focus();
      card.classList.remove('ok', 'bad');
      msg.textContent = 'Type the romaji. Enter skips.';
    }
    function score(){
      scoreEl.textContent = total ? right + ' / ' + total + '  ·  streak ' + streak : '';
    }
    function judge(ok){
      total++; waiting = true;
      if (ok) { right++; streak++; card.classList.add('ok'); msg.textContent = cur[1]; }
      else {
        streak = 0; card.classList.add('bad'); msg.textContent = 'It is ' + cur[1] + (DU[cur[0]] ? ' (or ' + DU[cur[0]] + ')' : '') + '. Enter for the next one.';
        if (!again.some(function(x){ return x[0] === cur[0]; })) again.push(cur);
      }
      score();
      if (ok) next();
    }
    input.addEventListener('input', function(){
      if (waiting) return;
      var v = input.value.trim().toLowerCase();
      if (answers(cur).indexOf(v) >= 0) judge(true);
    });
    input.addEventListener('keydown', function(e){
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (waiting) { next(); return; }
      var v = input.value.trim().toLowerCase();
      judge(answers(cur).indexOf(v) >= 0);
    });
    document.querySelectorAll('.game-sets .chip').forEach(function(chip){
      chip.addEventListener('click', function(){
        var s = chip.dataset.set;
        on[s] = !on[s];
        // keep at least one script on
        if (!on.hira && !on.kata) on[s === 'hira' ? 'kata' : 'hira'] = true;
        syncChips(); save(); again = []; next();
      });
    });
    function syncChips(){
      document.querySelectorAll('.game-sets .chip').forEach(function(c){ c.setAttribute('aria-pressed', String(on[c.dataset.set])); });
    }
    syncChips();
    next();
  })();

  if (BUNDLE) {
    var pages = [].slice.call(document.querySelectorAll('[data-page]'));
    var show = function(id){
      if (!pages.some(function(p){ return p.id === id; })) id = pages[0].id;
      pages.forEach(function(p){ p.hidden = p.id !== id; });
      find.value = ''; filterGrid(''); results.hidden = true;
      window.scrollTo({top: 0});
    };
    // one listener for every in-page link, including the search results that get rebuilt on each keystroke
    document.addEventListener('click', function(e){
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      var id = a.getAttribute('href').slice(1);
      show(id);
      try { history.replaceState(null, '', '#' + id); } catch (err) {}
    });
    window.addEventListener('hashchange', function(){ show(location.hash.slice(1)); });
    show(location.hash.slice(1));
  }
})();
