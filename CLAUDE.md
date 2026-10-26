# Wabisebi Grammar Notebook

A personal Japanese grammar site for Seb. One page per grammar point, added after we talk the point through until it clicks. Plain HTML, no framework. Inside Claude it's previewed through a tiny local server (see Preview below); outside Claude Seb can still just open `index.html` in Safari or Chrome.

## Goal
Understand every N5 grammar point and have each one here as a page (set 23 Oct 2026). Seb does Bunpro lessons alongside, but these pages are where it actually clicks. New grammar pages come first; side features (soundboard, themes, tooling) wait unless they directly help.

## Location
The project lives in `~/Projects/WABISEBI_NOTEBOOK` (moved out of Dropbox on 22 Oct 2026, because macOS protects Dropbox and Documents and blocked the preview server from reading files there; `~/Projects` needs no permissions). It syncs between Seb's MacBook and Mac mini with git + GitHub (private repo `wabisebi/wabisebi-notebook`, set up 23 Oct 2026 on the MacBook with the `gh` login; the Mac mini was set up on 26 Oct 2026 the same way: cloned, `gh` login, git name `wabisebi`). Routine: pull when Seb sits down, commit and push when done. Seb is new to git: explain in plain words, one step at a time.

## Files
- `pages/<id>.html`: one file per grammar point. Only the article content lives here.
- `pages/start.html`: the start page (added 26 Oct 2026), big cards linking to Grammar, Hiragana, Katakana, Kanji, Numbers & Dates and Kana Game. `build.py` puts it first, so `index.html` opens on it, and the top bar title links here. Add a card when a new section of the site appears.
- `pages/home.html`: the grammar grid ("All grammar"), a card grid of every grammar point grouped by level. The cards are built by `site.js` from `INDEX`, so nothing to edit here when adding a point. The top bar "Grammar" link opens it.
- `pages/kana.html`: the Hiragana Chart, a soundboard (added 23 Oct 2026). Not a grammar point, so it's not in `INDEX`; it's linked from the top bar ("あ Hiragana") and `build.py` adds it by name. Stroke order panel on top of both charts (added 24 Oct 2026, all kana): clicking a tile also draws its strokes one by one over a faint copy of the same strokes (plain pen lines, no brush font: the brush-font-plus-mask version didn't fit reliably). Combos draw both characters side by side. Stroke paths live in `strokes.js` (`STROKES`, from KanjiVG, CC BY-SA 3.0, credit shown in the panel); `build.py` inlines it. 104 tiles (basic, ゛/゜, combos), click shows the stroke order, the tile stays gold while selected, romaji toggle. No sound at the moment: the Kyoko clips were removed on 24 Oct 2026 (Seb didn't like them; they're still in git history, commit 2b8de7a and earlier, as `media/kana/u<hex>.m4a`).
- `pages/katakana.html`: the Katakana Chart (added 23 Oct 2026), a copy of the Hiragana Chart with katakana on the tiles. No sound either. Top bar link "ア Katakana", `build.py` adds it by name. To change the layout of both charts, edit `kana.html` and regenerate this one from it.
- `pages/kanji.html`: the N5 Kanji chart (added 25 Oct 2026), same grid and stroke order panel as the kana charts. 80 kanji in groups (Numbers, Time, People, ...), each tile shows the kanji and a short plain meaning (our own, not Heisig's), with a "Meaning: on/off" toggle. Top bar link "字 Kanji", `build.py` adds it by name.
- `pages/numbers.html`: the Numbers & Dates chart (added 26 Oct 2026, for Seb's class), a reference page like the kana charts, not in `INDEX`. Tables for numbers, 10 counters, time, weekdays, months, days of the month and last/this/next. Odd readings in blue (`.irr` / `.nt.odd`). Top bar link "数 Numbers & Dates", `build.py` adds it by name. First version: Seb will say what to change.
- `pages/resources.html`: Resources (added 26 Oct 2026), Seb's collection of useful channels, sites and tools, not in `INDEX`. Grouped in `.level` boxes by topic, inside them `.cat` categories with a small heading, same as the home grid. Each resource a `.rcard` row in a plain list, not a grid (Seb asked 26 Oct 2026) (round channel avatar from `media/resources/`, name, one `.lv` pill per level like the grammar grid, so N5–N4 is two pills "N5" "N4", level colors (set 26 Oct 2026, also used by the grammar grid): N5 green, N4 sky blue, N3 violet, N2 orchid, N1 warm white, one-line note; for a playlist use the owning channel's avatar; no avatar (e.g. an Anki deck): a `.av.glyph` circle with one kanji). Topics so far, in order: Vocabulary (SRS app, then Anki decks), Grammar (Website, then YouTube), Immersion Videos (YouTube). Inside a category, rows go by level, easiest first (N5, N5–N4, N5–N2, N4..., untagged last). A gold "Recommended" tag (`.tag.rec`) marks Seb's top pick. Opens in a new tab. Top bar link "棚 Resources", start page card, `build.py` adds it by name. Seb adds resources by telling Claude.
- `strokes.js`: KanjiVG stroke paths for every kana and the 80 N5 kanji (data only, don't read it).
- `site.js`: the `INDEX` list, the top bar (title, search), the home grid, audio buttons and footer. Shared by all pages.
- `style.css`: all styling. Shared by all pages.
- `media/`: screenshots and audio for sentence mining.
- `index.html`: the whole site in one file, so Seb can open it by double-clicking in any browser. Media is NOT embedded. Made by `build.py`, never edit or read it by hand. (Opened as a plain file in the Claude panel it becomes a frozen snapshot where media can't load and a hint shows instead; that's why we use the server below.)
- `.claude/launch.json`: the preview server config (`notebook`).
- `N5_CHECKLIST.md`: every planned N5 point (our own list, made 23 Oct 2026), in the site's categories and learning order. Tick a point (`[x]`) when its page is added. Pick the next page from here.

After any change to pages, `site.js`, `style.css` or `media/`, run `python3 build.py` so index.html stays up to date.

To keep token use low: when working on a grammar point, read only that page's file. Don't read `style.css` or other pages unless the task needs it.

## About Seb as a learner
- Studied Japanese for 3.5 years, knows about 8,000 words, but struggles to build sentences.
- Tunes out when reading grammar explanations, lists of forms, or abstract labels.
- Learns from one concrete situation, one sentence, then a with/without comparison.
- Gets overloaded when too much is added at once. Keep explanations short.

## How we work
- Talk a grammar point through first. Only add to the site what actually helped in the conversation.
- Every page must make sense on its own. If a rule from another page applies (for example when to add な), repeat it on this page. Cross-links are a bonus, never a replacement.
- To check the site, start the preview with `preview_start` name `notebook` (Python's built-in server on port 8000, nothing to install, costs no tokens while running). It shows the full site in the browser pane, images and audio included. Rebuild first so `index.html` is current. Only take screenshots for layout changes.
- Seb wants to see the full working site (with media) inside Claude, so use the preview server rather than opening files directly. Don't add other servers, frameworks or build tools without asking.
- Only edit the page being worked on. Never change other pages unless Seb asks.
- Don't add new section types (rules, frames, warnings) on your own. Suggest first, add only when Seb says yes.
- The site-wide structure and consistency pass happens later, only when Seb asks.
- Never use em dashes in anything written for Seb, on the site or in replies.
- Never copy sentences or examples from other sites (Bunpro etc.). Seb shares them only to show what clicked. Write our own.
- Keep replies direct, short and informal.

## Preview
Start it with `preview_start` (name `notebook`). It serves the project root, so `/` shows `index.html` and single pages also work, e.g. `/pages/no.html`. The port is usually 8000 but the app may pick another one; the config follows it via `$PORT`.
- The config runs Python from `/tmp` with `-d /Users/Seb/Projects/WABISEBI_NOTEBOOK` (full path, `$HOME` isn't reliable there).
- The app reads `launch.json` from the folder the chat was started in. Always start chats in `~/Projects/WABISEBI_NOTEBOOK`.
- If every page is a 404, check the running command with `ps -ax | grep http.server` to see which folder it's actually serving. Never move the project into Dropbox, Documents or Desktop, and don't use Full Disk Access.

## Page structure (current)
Each grammar point is its own file in `pages/`. To make a new one, copy an existing page, keep the shell (head, `<header class="top">`, `<main>`, foot, `site.js` script) and replace the `<article id="...">`. Inside the article:
- `.head`: small label (for example "N5 Grammar"), the pattern, and an empty `<p class="sub"></p>`. `site.js` fills it with the short description from `INDEX` ("Object marker", "To be, is (polite)"), the same text as the grid card. Never type the description into the page; change it in `INDEX` only, so both always match. No gist line, the lead card does that job.
- Lead card (every grammar page has one since 22 Oct 2026): a `.lead` box right under `.head`. Screenshot, `.src`, a `.line` with `.play` + a short `.jp` sentence, `.en` with implied context in `<span class="ctx">[brackets]</span>`, then `.explain`.
  - Only Seb's OWN mined cards (same Migaku cards and media as sentence mining). Never use cards or media from the Jlab deck; it was only the inspiration.
  - Just pick the BEST cards (changed 23 Oct 2026): clear, natural, short. It doesn't matter where in the sentence the grammar is, or if other grammar comes after it (よ, けど, んで, の, etc. are all fine). Search the Sentence field. Later grammar can use longer sentences. Don't repeat the same card in Sentence mining below.
  - `.explain` must clearly DESCRIBE the grammar, not hint at a feeling: what it does, what it attaches to, what question this sentence answers, then the polite/casual (or other) variant. 3 short sentences, plain words, our own wording.
  - Polite and casual forms of the same grammar live on ONE page (decided 22 Oct 2026, no exceptions; です and だ were split for a while and merged back). Not an exception but worth knowing: でしょう and だろう are two pages (23 Oct 2026), because in speech the real split is neutral でしょ vs masculine だろ, not polite vs casual. でしょう and でしょ share the でしょう page. If a point has another form, add a second card right under the first: `.lead.second`, its own real clip, a `.use` label ("Polite"/"Casual"), and only 1 or 2 sentences of `.explain`. The first card then gets a `.use` label too. Now on です / だ, ～の, ～んです, い-adj past.
  - New pages always get one. If no own card fits, ask Seb instead of using someone else's.
  - If the chosen card was in Sentence mining, move it up (remove it there). If its Source field is empty, write "Source unknown".
- "Examples": `.scenes` with `.scene` cards. Each card has `.sit` (situation), `.jp` (Japanese), `.en` (translation), optionally `.note` and a `.use` label at the bottom.
- "With and without": `.compare` grid of `.cbox` (plain) and `.cbox.yes` (with the grammar).
- "Sentence mining" (last section, optional): `.mines` with lighter `.mine` boxes. Each starts with a `.use` label: `<span class="use polite">Polite</span>` (soft green, not gold: gold means clickable, like the play button) or `<span class="use casual">Casual</span>` (blue), then a screenshot, `.src` (show, season, episode; ask Seb if unknown), a `.line` with a `.play` audio button and `.jp`, then `.en` and `.note`.
- How many and which cards (decided 26 Oct 2026): aim for 8 Sentence mining cards per page (leads not counted), when the deck allows it. Fill them in this order:
  1. Migaku cards with a source (Source field filled, or a subtitle-clip file name like `shirokumacafe04_14m27s...`).
  2. Migaku cards without a source (empty Source and a hash file name; often AI generated, so they sound less natural). Only to fill up.
  3. Core 2.6K cards (note type "Core 2.6K", ~5,700 notes, all with Sentence Audio, about half with a Picture). Only if still short. Use the `Sentence`, `Sentence Meaning`, `Sentence Audio` and `Picture` fields. No picture: put an empty image placeholder in its place.
  - Sourceless and Core cards get a small tag in `.src` (same pill style as `.guess`): "No source" or "Core". The goal is to phase both out: when Seb mines a better sourced card for a page, it replaces a tagged one.
  - Lead cards stay strict: only Migaku cards with a source, never sourceless or Core.
  - The other rules (one sentence, plain meaning, used once on the site) apply to all three kinds.
- Every card is used ONCE on the whole site, as a lead card or a mining card, never on two pages (decided 23 Oct 2026), even when the sentence fits two grammar points. Before adding a card, check its audio file name isn't already in `pages/` (`grep -l <file> pages/*.html`). If the only good card is taken, pick another one or leave it out.
- Mining media comes from Seb's Anki cards (Migaku). Find the card in a copy of `~/Library/Application Support/Anki2/User 1/collection.anki2` (read only), copy the image and sentence audio from `collection.media` into `media/` (pages reference them as `../media/...`). Always use the Sentence Audio field, never Word Audio. Get the source from the card's Source field. Aim for about half Polite and half Casual cards on each page, when the deck allows it. Only use cards with ONE sentence, so the clip and line stay short enough to see the point quickly (decided 22 Oct 2026). Two short sentences are okay only when no single-sentence card fits. A YouTube link as source is shown as "YouTube · video" with the link. Always strip timestamps from YouTube links (`t=`, `start=`, `#t=`, `time_continue=`), keep only `watch?v=ID` (decided 25 Oct 2026).
- The grammar inside Japanese sentences is wrapped in `<mark class="g">`.
- No literal-translation lines under `.en` (tried 22 Oct 2026, Seb found it cluttered). A "Literally ..." inside a `.note` is fine when it really helps.

## Index (home grid and search)
- Grouped by JLPT level (currently only N5).
- Lives in the `INDEX` list at the top of `site.js`. Each level has categories (`cats`), each category its `pages`. Each item: `['id', 'pattern', 'short description']`, where id is the file name in `pages/`. The short description is a Bunpro-style label ("Subject marker", "Explaining, giving the reason") and shows on the grid card and under the pattern on the page.
- Categories (added 23 Oct 2026, so ~120 N5 points stay easy to scan), in learning order: First steps, Question words, Particles, Sentence endings, Adjectives, Verbs: basic forms, て-form, Wanting and inviting, Explaining (の). They show as small headings inside the level box; empty ones are hidden. Each point lives in ONE category. Adjust or add categories when a point really doesn't fit, and mention it to Seb.
- The home page ("All grammar") shows one foldable box per level (N5 etc., no lessons) with a grid of cards: pattern, short description, small level tag like "N5" (Seb likes it, keep it). No SRS stuff (no "Adept" or progress), this is a reference, not a learning tool. A new level is just a new group in `INDEX`.
- There is no sidebar and no section nav. Navigation is the sticky top bar on every page: the title (links home) and a search. (A light/dark toggle was there but never worked; removed on 23 Oct 2026 at Seb's request. The site is dark only.) Tried separate "N5 Grammar" / "Concepts" pages with nav links on 22 Oct 2026; Seb preferred the one grid, so don't bring that back unless asked.
- Search matches the id, pattern and description (so `は`, `topic` and `wa` all work). On home it filters the cards; on other pages it shows a dropdown of matches. Enter opens the first match, Esc clears.
- Add a new page there, in the right level and category, when you create it. Categories run in learning order, and so do the points inside each one (decided 23 Oct 2026). Put each new point where you think it fits best in that order; Seb doesn't need to be asked. The footer count updates itself; bump `UPDATED` to today's date.
- Cross-links between pages use `<a class="xref" href="id.html">`.

## Design (settled, don't change unless asked)
- Quiet dark theme: ink navy background, warm off-white text, one gold accent, soft blue for grammar and "with" boxes.
- Fonts: Newsreader (headings), IBM Plex Sans / Plex Sans JP (body), IBM Plex Mono (small labels).
- No glows, no orange or red for grammar.
- Top bar and home grid (Oct 2026): cards use the same `--card` surfaces as scene cards, gold border on hover. Inspired by Bunpro's grammar grid but in our palette.

## Finishing things (asked by Seb, 23 Oct 2026)
Seb tends to widen a project mid-way and then leave it half done (the soundboard, the light/dark toggle). Help Seb finish:
- When a new idea comes up mid-task, point it out kindly and suggest parking it until the current thing is done.
- Start with the smallest version that works; add extras later, one at a time.
- Before wrapping up, name anything left half done and suggest finishing or parking it here.

Parked (not done, pick up later):
- Kana chart sounds: removed on 24 Oct 2026, Seb will find good-sounding ones himself. When he has them, add a `data-src` back on the tiles and the click code in `site.js` (see git history before this change).
- Typing Japanese page (parked 26 Oct 2026, a draft was made and removed the same day). Idea: a how-to page, one box each for PC (Windows 11), Mac, Android (Gboard) and iPhone with "Set it up" steps and "Switch" shortcuts, then a small "Tricky ones" table (ん = nn, っ = double letter, を = wo, ー = minus key, は/へ = ha/he) and how to get kanji (Space, then Enter). Start page card only, the top bar is full. Watch out: `.how` is already a CSS class, don't reuse it.
- Kanji grid extras (the basic grid with stroke order was built 25 Oct 2026, the rest waits until N5 grammar is done). Seb did RTK (can write, knows meanings) and knows lots of words as whole shapes, but not the sound of single kanji. Smallest version first: N5 kanji only (~80), grid tiles with kanji + keyword, click opens: stroke order animation (KanjiVG, same as kana), our own keyword (not Heisig's, they're copyrighted; or KANJIDIC meanings), and 3 or 4 words from Seb's own Migaku deck lined up so the shared sound stands out (電車, 電話, 電気 → でん). No reading lists. Later extras, one at a time: sound-part hints (青 せい in 晴, 清, 精, 静), RTK parts it's built from, one mined sentence.

## Pages so far
N5: です / だ (one page, polite and casual together), じゃない・ではありません, な-Adjective (merged with the old な page on 23 Oct 2026; id `na-adj`), は, が, を, ～んです・のです, ～の (questions), い-Adjective (Past), のは・のが, でしょう, だろう, がある.
Other: home (the grid). (The "How I learn" page was removed on 22 Oct 2026; what's in "About Seb as a learner" above replaces it. A Nominalization concept page existed briefly and was removed on Seb's request.)
