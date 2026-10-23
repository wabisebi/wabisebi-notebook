/* Shared by every page in pages/: builds the top bar with the search, the card grid on the home page, the audio buttons and the footer.
   To add a grammar point: add one line to its level below. [file name without .html, pattern, short description]
   The short description shows on the home grid card AND under the pattern on the page itself (filled in below), so it only lives here. */
var INDEX = [
  {level: 'N5', pages: [
    ['desu', 'です / だ', 'To be, is'],
    ['na', 'な', 'Connects a な-adjective to a noun'],
    ['wa', 'は', 'Topic marker: "as for..."'],
    ['ga', 'が', 'Subject marker'],
    ['wo', 'を', 'Object marker'],
    ['mo', 'も', 'Also, too'],
    ['ka', 'か', 'Question marker'],
    ['kore-sore-are', 'これ・それ・あれ', 'This, that, that over there'],
    ['ndesu', '～んです・のです', 'Explaining, giving the reason'],
    ['no', '～の', 'Asking for the story behind something'],
    ['i-adj-past', 'い-Adjective (Past)', 'Was: the past of い-adjectives'],
    ['noha-noga', 'のは・のが', 'Turning an action into a noun']
  ]},
  // not grammar: reading pages, kept out of the grammar count in the footer
  {level: 'Notes', pages: [
    ['kana', 'ひらがな・カタカナ', 'How I learned the kana']
  ]}
];
var UPDATED = '22 Oct 2026';

(function(){
  // index.html (made by build.py) has every page in one file, so links switch pages instead of loading files
  var BUNDLE = !!window.BUNDLE;
  var href = function(id){ return BUNDLE ? '#' + id : id + '.html'; };

  // every point, for the grid and the search; k is what the search matches (file name, pattern, description)
  var points = [];
  INDEX.forEach(function(g){
    g.pages.forEach(function(p){
      points.push({id: p[0], pat: p[1], d: p[2], level: g.level, k: (p[0] + ' ' + p[1] + ' ' + p[2]).toLowerCase()});
    });
  });
  var count = points.filter(function(p){ return p.level !== 'Notes'; }).length;


  var top = document.getElementById('top');
  top.innerHTML =
    '<a class="brand" href="' + href('home') + '"><span class="label">文法ノート</span><span class="t">Wabisebi Grammar Notebook</span></a>' +
    '<div class="find"><input id="find" type="search" placeholder="Search: は, topic, wa…" aria-label="Search grammar" autocomplete="off">' +
      '<ol class="results" id="results" hidden></ol></div>' +
    // light/dark toggle: only the button for now, it doesn't switch anything yet
    '<button class="theme" id="theme" type="button" aria-label="Light or dark mode">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg></button>';

  // home page: every grammar point as a card, grouped by level
  var grid = document.getElementById('grid');
  if (grid) {
    grid.innerHTML = INDEX.map(function(g){
      var cards = g.pages.map(function(p){
        return '<li><a class="gcard" href="' + href(p[0]) + '" data-k="' + (p[0] + ' ' + p[1] + ' ' + p[2]).toLowerCase() + '">' +
          '<span class="p">' + p[1] + '</span><span class="d">' + p[2] + '</span><span class="lv">' + g.level + '</span></a></li>';
      }).join('');
      return '<details class="level" open><summary><span class="t">' + g.level + '</span><span class="label">' + g.pages.length + (g.pages.length === 1 ? ' point' : ' points') + '</span></summary>' +
        '<ol class="cards">' + cards + '</ol></details>';
    }).join('') + '<p class="empty" id="gnone" hidden>No match.</p>';
  }
  var filterGrid = function(q){
    if (!grid) return;
    var any = false;
    grid.querySelectorAll('.gcard').forEach(function(a){
      var m = !q || a.getAttribute('data-k').indexOf(q) > -1;
      a.parentNode.hidden = !m; if (m) any = true;
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
    document.querySelectorAll('.mine img, .lead img, .prose img').forEach(function(img){
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
