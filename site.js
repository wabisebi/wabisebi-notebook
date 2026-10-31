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
      ['nanimo', '何も・誰も・どこも', 'Nothing, nobody, nowhere (+ negative)'],
      ['nandemo', '何でも・誰でも・どこでも', 'Anything, anyone, anywhere']
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
      ['de-means', 'で (Means)', 'By, with: what you use'],
      ['to-with', 'と (With)', 'With: doing something together'],
      ['to-quote', 'と (Quotation)', 'Quoting: と思う, と言う (casual: って)'],
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
      ['na-adj-neg', 'な-Adjective (Negative)', 'Isn\'t: じゃない'],
      ['na-adj-past', 'な-Adjective (Past)', 'Was: だった and でした'],
      ['suki-kirai', '好き・嫌い', 'Like, dislike (～が好き)'],
      ['jouzu-heta', '上手・下手', 'Good at, bad at (～が上手)'],
      ['naru', '～くなる・～になる', 'To become, to get (bigger, colder...)'],
      ['adverb-ku-ni', '～く・～に (Adverbs)', 'How you do it: 早く, 静かに'],
      ['yori', 'より・～の方が', 'Comparing: than, ___ is more'],
      ['ichiban', '一番 (いちばん)', 'The most, number one']
    ]},
    {cat: 'Adverbs', pages: [
      ['totemo', 'とても', 'Very'],
      ['chotto', 'ちょっと', 'A little, a bit (and softening)'],
      ['amari', 'あまり～ない', 'Not very, not much'],
      ['zenzen', '全然～ない', 'Not at all'],
      ['itsumo', 'いつも・よく・時々', 'Always, often, sometimes'],
      ['mou', 'もう', 'Already, not anymore'],
      ['mada', 'まだ', 'Still, not yet']
    ]},
    {cat: 'Verbs: basic forms', pages: [
      ['masu', 'ます', 'Polite verb endings'],
      ['ru-verb', 'る-Verb (Dictionary)', 'Ichidan verbs: plain and polite'],
      ['u-verb', 'う-Verb (Dictionary)', 'Godan verbs: plain and polite'],
      ['ru-verb-neg', 'る-Verb (Negative)', 'Not doing: ない and ません'],
      ['u-verb-neg', 'う-Verb (Negative)', 'Not doing: u sound → a + ない'],
      ['ru-verb-past', 'る-Verb (Past)', 'Did: た and ました'],
      ['u-verb-past', 'う-Verb (Past)', 'Did: った, んだ, いた and ました'],
      ['verb-past-neg', 'Verb (Past negative)', 'Didn\'t: なかった and ませんでした'],
      ['kuru', '来る', 'To come (irregular verb)'],
      ['suru', 'する', 'To do (irregular verb)'],
      ['verb-noun', 'Verb + Noun', 'Describing a noun with a verb: 食べる人'],
      ['ni-iku', '～に行く・～に来る', 'Go to do, come to do'],
      ['na-dont', '～な (Don\'t)', 'Don\'t! (blunt order)']
    ]},
    {cat: 'て-form', pages: [
      ['te-form', 'て-Form', 'How to make the て-form'],
      ['te-and', '～て (And then)', 'Joining actions: do this, then that'],
      ['kute-de', '～くて・～で', 'And: joining adjectives and nouns'],
      ['te-kudasai', '～てください', 'Please do (request)'],
      ['naide-kudasai', '～ないでください', 'Please don\'t'],
      ['teiru', '～ている (Doing now)', 'Is ___ing'],
      ['teiru-state', '～ている (State)', 'Lives in, is married: a state that lasts'],
      ['mada-teinai', 'まだ～ていない', 'Haven\'t done it yet'],
      ['temo-ii', '～てもいい', 'It\'s okay to, may I'],
      ['tewa-ikenai', '～てはいけない', 'Must not'],
      ['te-kara', '～てから', 'After doing']
    ]},
    {cat: 'Wanting and inviting', pages: [
      ['hoshii', 'ほしい (欲しい)', 'Want (a thing)'],
      ['tai', '～たい', 'Want to (do something)'],
      ['masenka', '～ませんか', 'Won\'t you, why don\'t we (inviting)'],
      ['mashou', '～ましょう', 'Let\'s (casual: ～よう)'],
      ['mashouka', '～ましょうか', 'Shall I, shall we (offering)'],
      ['demo-or', 'でも (Or something)', 'Or something: a soft suggestion'],
      ['tsumori', '～つもりだ', 'Plan to, intend to']
    ]},
    {cat: 'Giving and receiving', pages: [
      ['morau', 'もらう (貰う)', 'To get, to receive'],
      ['ageru', 'あげる', 'To give (to someone else)'],
      ['kureru', 'くれる・てくれる', 'Someone gives me, does something for me']
    ]},
    {cat: 'Joining sentences', pages: [
      ['soshite', 'そして・それから', 'And, and then (start of a sentence)'],
      ['demo', 'でも', 'But (start of a sentence)'],
      ['ga-but', 'が (But)', 'But, however (polite)'],
      ['kedo', 'けど・けれども', 'But (everyday)'],
      ['kara-because', 'から (Because)', 'Because, so: giving a reason'],
      ['node', 'ので', 'Because, so (softer than から)'],
      ['mae-ni', '～前に', 'Before doing something'],
      ['ato-de', '～た後で', 'After (something happens)'],
      ['toki', '～とき (時)', 'When, at the time'],
      ['tari', '～たり～たりする', 'Doing things like A and B']
    ]},
    {cat: 'Explaining (の)', pages: [
      ['no', '～の', 'Asking for the story behind something'],
      ['ndesu', '～んです・のです', 'Explaining, giving the reason'],
      ['noha-noga', 'のは・のが', 'Turning an action into a noun']
    ]}
  ]}
];
var UPDATED = '30 Oct 2026';

(function(){
  // index.html (made by build.py) has every page in one file, so links switch pages instead of loading files
  var BUNDLE = !!window.BUNDLE;
  var href = function(id){ return BUNDLE ? '#' + id : id + '.html'; };

  // light or dark look, remembered in this browser (dark if nothing saved)
  var THEME = 'wabisebi-theme';
  function getTheme(){ try { return localStorage.getItem(THEME) === 'light' ? 'light' : 'dark'; } catch (err) { return 'dark'; } }
  function setTheme(t){
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem(THEME, t); } catch (err) {}
  }
  setTheme(getTheme());

  // every point, for the grid and the search; k is what the search matches (file name, pattern, description)
  var points = [];
  INDEX.forEach(function(g){
    g.pages = [].concat.apply([], g.cats.map(function(c){ return c.pages; }));
    g.cats.forEach(function(c){ c.pages.forEach(function(p){
      points.push({id: p[0], pat: p[1], d: p[2], level: g.level, cat: c.cat, k: (p[0] + ' ' + p[1] + ' ' + p[2]).toLowerCase()});
    }); });
  });
  var count = points.length;


  var top = document.getElementById('top');
  top.innerHTML =
    '<a class="brand" href="' + href('start') + '"><span class="t">Wabisebi Japanese</span></a>' +
    '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="menu"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '<div class="menu" id="menu">' +
    '<a class="nav" href="' + href('home') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg> Grammar</a>' +
    // wide screens: one "Kana" item that opens Hiragana and Katakana; phones keep the two links in the ☰ menu
    '<div class="kana-group"><button class="nav kana-btn" type="button" aria-expanded="false">あ Kana <svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="kana-drop">' +
      '<a class="nav" href="' + href('kana') + '">あ Hiragana</a>' +
      '<a class="nav" href="' + href('katakana') + '">ア Katakana</a>' +
      '</div></div>' +
    '<a class="nav m-only" href="' + href('kana') + '">あ Hiragana</a>' +
    '<a class="nav m-only" href="' + href('katakana') + '">ア Katakana</a>' +
    '<a class="nav" href="' + href('kanji') + '">字 Kanji</a>' +
    '<a class="nav" href="' + href('numbers') + '">数 Numbers</a>' +
    '<a class="nav" href="' + href('resources') + '">棚 Resources</a>' +
    '<div class="find"><input id="find" type="search" placeholder="Search: は, topic, wa…" aria-label="Search grammar" autocomplete="off">' +
      '<ol class="results" id="results" hidden></ol></div>' +
    '</div>' +
    '<button class="theme" type="button"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"></svg></button>';

  // the switch shows what you'd go to: a sun in dark mode, a moon in light mode
  var themeBtn = top.querySelector('.theme');
  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>';
  var MOON = '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>';
  function showTheme(){
    var light = getTheme() === 'light';
    themeBtn.querySelector('svg').innerHTML = light ? MOON : SUN;
    themeBtn.setAttribute('aria-label', light ? 'Switch to dark' : 'Switch to light');
    themeBtn.title = themeBtn.getAttribute('aria-label');
  }
  themeBtn.addEventListener('click', function(){ setTheme(getTheme() === 'light' ? 'dark' : 'light'); showTheme(); });
  showTheme();

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
  // picking a link or a search result closes it (in index.html these only change the #page, so nothing reloads)
  top.querySelector('.menu').addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('hashchange', function(){ setMenu(false); });

  // the Kana dropdown (wide screens): click or hover opens it, a click elsewhere or Esc closes it
  var kanaGroup = top.querySelector('.kana-group'), kanaBtn = top.querySelector('.kana-btn');
  function setKana(open){ kanaGroup.classList.toggle('open', open); kanaBtn.setAttribute('aria-expanded', String(open)); }
  kanaBtn.addEventListener('click', function(){ setKana(!kanaGroup.classList.contains('open')); });
  kanaGroup.addEventListener('click', function(e){ if (e.target.closest('a')) setKana(false); });
  document.addEventListener('click', function(e){ if (!kanaGroup.contains(e.target)) setKana(false); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setKana(false); });

  // home page: every grammar point as a card, grouped by level, with an "On this page" list of the categories (same as on Resources)
  var grid = document.getElementById('grid');
  // the check at the bottom right of each card: points Seb has learned, remembered in this browser
  var LEARNED = 'wabisebi-learned';
  var learned = [];
  try { learned = JSON.parse(localStorage.getItem(LEARNED)) || []; } catch (err) {}
  if (grid) {
    var catId = function(g, i){ return 'g-' + g.level.toLowerCase() + '-' + i; };
    var toc = INDEX.map(function(g){
      return (INDEX.length > 1 ? '<li class="lvl">' + g.level + '</li>' : '') + g.cats.map(function(c, i){
        return c.pages.length ? '<li><a href="#' + catId(g, i) + '">' + c.cat + '</a></li>' : '';
      }).join('');
    }).join('');
    grid.innerHTML = '<div class="rwrap"><div class="rcol">' + INDEX.map(function(g){
      var cards = function(pages){ return pages.map(function(p){
        return '<li><a class="gcard" href="' + href(p[0]) + '" data-k="' + (p[0] + ' ' + p[1] + ' ' + p[2]).toLowerCase() + '">' +
          '<span class="p">' + p[1] + '</span><span class="d">' + p[2] + '</span><span class="lv ' + g.level.toLowerCase() + '">' + g.level + '</span></a>' +
          '<button class="learn" type="button" data-id="' + p[0] + '" aria-pressed="' + (learned.indexOf(p[0]) > -1) + '" aria-label="Learned" title="Learned">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 12.5l3.5 3.5 7.5-8"/></svg></button></li>';
      }).join(''); };
      var cats = g.cats.map(function(c, i){
        if (!c.pages.length) return '';
        return '<section class="cat" id="' + catId(g, i) + '"><h3 class="label">' + c.cat + '</h3><ol class="cards">' + cards(c.pages) + '</ol></section>';
      }).join('');
      return '<details class="level" open><summary><span class="t">' + g.level + '</span><span class="label">' + g.pages.length + (g.pages.length === 1 ? ' grammar point' : ' grammar points') + '</span></summary>' +
        cats + '</details>';
    }).join('') + '<p class="empty" id="gnone" hidden>No match.</p></div>' +
      '<nav class="toc" aria-label="On this page"><p class="label">On this page</p><ul>' + toc + '</ul></nav></div>';
    grid.addEventListener('click', function(e){
      var b = e.target.closest('.learn');
      if (!b) return;
      var id = b.getAttribute('data-id'), i = learned.indexOf(id);
      if (i > -1) learned.splice(i, 1); else learned.push(id);
      b.setAttribute('aria-pressed', i < 0);
      try { localStorage.setItem(LEARNED, JSON.stringify(learned)); } catch (err) {}
    });
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
      var link = grid.querySelector('.toc a[href="#' + c.id + '"]');
      if (link) link.parentNode.hidden = c.hidden;
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

  // footer: the grammar count only on grammar pages (and the grid), the stroke data credit on the kana and kanji charts, nothing elsewhere
  var foot = document.getElementById('foot');
  function setFoot(id){
    if (!foot) return;
    if (id === 'home' || points.some(function(p){ return p.id === id; })) foot.textContent = 'Updated ' + UPDATED + ' · ' + count + ' grammar points';
    else if (id === 'kanji' || id === 'kana' || id === 'katakana') foot.innerHTML = '<a class="credit" href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">Stroke data: KanjiVG, CC BY-SA 3.0</a>';
    else foot.textContent = '';
  }
  if (!BUNDLE) { var own = document.querySelector('main > [id]'); setFoot(own && own.id); }

  // the short description under each page's pattern and the category in its label come from INDEX, so they always match the grid
  points.forEach(function(p){
    var page = document.getElementById(p.id), sub = page && page.querySelector('.sub'), label = page && page.querySelector('.head .label');
    if (sub) sub.textContent = p.d;
    if (label) label.textContent = p.level + ' Grammar · ' + p.cat;
    // a button back to the grid, just above the page's card on the left (inside the article, so index.html shows it with the page)
    if (page && !page.querySelector('.back')) { page.classList.add('has-back'); page.insertAdjacentHTML('afterbegin', '<a class="back" href="' + href('home') + '"><span class="tri" aria-hidden="true"></span>All grammar</a>'); }
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

  // one shared player for every play button: a player per button (600 in index.html) made iPhones slow and laggy.
  // A clip only loads when its button is touched, and starting one stops the other.
  var player = new Audio(), playBtn = null;
  player.preload = 'none';
  function cue(b){
    var src = b.getAttribute('data-src');
    if (player.dataset.src !== src) { player.dataset.src = src; player.src = src; }
  }
  player.addEventListener('play', function(){ if (playBtn) playBtn.classList.add('on'); });
  player.addEventListener('pause', function(){ if (playBtn) playBtn.classList.remove('on'); });
  // start loading as the finger lands, so the clip is (nearly) ready by the time the tap ends
  document.addEventListener('pointerdown', function(e){
    var b = e.target.closest('.play');
    if (b && player.paused) cue(b);
  });
  document.addEventListener('click', function(e){
    var b = e.target.closest('.play');
    if (!b) return;
    if (b === playBtn && !player.paused) { player.pause(); return; }
    if (playBtn) playBtn.classList.remove('on');
    player.pause(); cue(b); playBtn = b;
    try { player.currentTime = 0; } catch (err) {}
    var p = player.play();
    if (p && p.catch) p.catch(function(){ b.classList.remove('on'); });
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
    strokeBox.querySelector('.note').textContent = n ? n + (n === 1 ? ' stroke' : ' strokes') : 'Stroke order coming soon';
    strokeBox.querySelector('.replay').style.visibility = n ? 'visible' : 'hidden';
    strokeBox.dataset.ch = ch;
  }
  document.querySelectorAll('.stroke-panel').forEach(function(strokeBox){
    strokeBox.innerHTML = '<div class="sv"></div><div class="side"><span class="note"></span><button class="replay" type="button">Replay</button></div>'; // the credit sits in the footer, under the grid
    strokeBox.querySelector('.replay').addEventListener('click', function(){ showStrokes(strokeBox, strokeBox.dataset.ch); });
    showStrokes(strokeBox, strokeBox.dataset.first);
    // kanji chart: the tiles carry their readings, shown under the animation
    var first = [].find.call(strokeBox.closest('.kana-board').querySelectorAll('.kana[data-on]'), function(b){ return b.querySelector('.k').textContent === strokeBox.dataset.first; });
    if (first) {
      strokeBox.classList.add('has-yomi');
      strokeBox.insertAdjacentHTML('beforeend', '<dl class="yomi"><dt>On\'yomi</dt><dd class="on"></dd><dt>Kun\'yomi</dt><dd class="kun"></dd><dt>Examples</dt><dd class="words"></dd></dl>');
      showYomi(strokeBox, first);
    }
    // on phones the panel is a bottom sheet (kana and kanji charts): a tile opens it, × or Esc closes it.
    // At the top of the page it played out of sight once you scrolled down to a tile.
    var board = strokeBox.closest('.kana-board');
    strokeBox.insertAdjacentHTML('afterbegin', '<button class="sheet-close" type="button" aria-label="Close">×</button>');
    strokeBox.querySelector('.sheet-close').addEventListener('click', function(){ board.classList.remove('sheet-open'); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') board.classList.remove('sheet-open'); });
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
      if (sp) { showStrokes(sp, b.querySelector('.k').textContent); b.closest('.kana-board').classList.add('sheet-open'); }
      if (sp && b.dataset.on) showYomi(sp, b);
    });
  });
  // resources and the grammar grid: "On this page" list. Clicks scroll in place (index.html uses the #hash for pages), and the section in view is marked
  document.querySelectorAll('.toc').forEach(function(toc){
    var bar = document.querySelector('.top');
    function barHeight(){ if (bar) document.documentElement.style.setProperty('--topbar', bar.offsetHeight + 'px'); }   // the top bar wraps to different heights
    barHeight(); window.addEventListener('resize', barHeight);
    var links = [].slice.call(toc.querySelectorAll('a'));
    links.forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();   // keep index.html's page router from treating it as a page link
        var sec = document.getElementById(a.getAttribute('href').slice(1));
        if (!sec) return;
        var box = sec.closest('details'); if (box) box.open = true;   // a category sits inside its level box
        sec.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth', block: 'start'});
      });
    });
    if (!('IntersectionObserver' in window)) return;
    var seen = {};
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ seen[en.target.id] = en.isIntersecting; });
      var cur = links.find(function(a){ return seen[a.getAttribute('href').slice(1)]; });
      links.forEach(function(a){ a.classList.toggle('on', a === cur); });
    }, {rootMargin: '-' + (((bar && bar.offsetHeight) || 72) + 24) + 'px 0px -55% 0px'});   // +24: a section scrolled to sits 16px under the bar, so the one above it is out of the band
    links.forEach(function(a){ var sec = document.getElementById(a.getAttribute('href').slice(1)); if (sec) io.observe(sec); });
  });

  // the meaning toggle on the kanji chart (the kana charts always show romaji)
  document.querySelectorAll('.romaji-toggle').forEach(function(romaji){
    romaji.addEventListener('click', function(){
      var off = romaji.closest('.kana-board').classList.toggle('no-romaji');
      romaji.textContent = (romaji.dataset.label || 'Romaji') + ': ' + (off ? 'off' : 'on');
      romaji.setAttribute('aria-pressed', String(!off));
    });
  });

  if (BUNDLE) {
    var pages = [].slice.call(document.querySelectorAll('[data-page]'));
    var show = function(id){
      if (!pages.some(function(p){ return p.id === id; })) id = pages[0].id;
      pages.forEach(function(p){
        p.hidden = p.id !== id;
        // build.py makes every image lazy so hidden pages don't download theirs; the page being opened gets all of its own right away
        if (!p.hidden) p.querySelectorAll('img[loading="lazy"]').forEach(function(img){ img.loading = 'eager'; });
      });
      setFoot(id);
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
