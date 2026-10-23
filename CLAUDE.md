# Wabisebi Grammar Notebook

A personal Japanese grammar site for Seb. One page per grammar point, added after we talk the point through until it clicks. Plain HTML, no framework. Inside Claude it's previewed through a tiny local server (see Preview below); outside Claude Seb can still just open `index.html` in Safari or Chrome.

## Location
The project lives in `~/Projects/WABISEBI_NOTEBOOK` (moved out of Dropbox on 22 Oct 2026, because macOS protects Dropbox and Documents and blocked the preview server from reading files there; `~/Projects` needs no permissions). It syncs between Seb's MacBook and Mac mini with git + GitHub (private repo `wabisebi/wabisebi-notebook`, set up 23 Oct 2026 on the MacBook with the `gh` login; the Mac mini isn't set up yet). Routine: pull when Seb sits down, commit and push when done. Seb is new to git: explain in plain words, one step at a time.

## Files
- `pages/<id>.html`: one file per grammar point. Only the article content lives here.
- `pages/home.html`: the start page ("All grammar"), a card grid of every grammar point grouped by level. The cards are built by `site.js` from `INDEX`, so nothing to edit here when adding a point. `build.py` always puts home first, so `index.html` opens on it.
- `site.js`: the `INDEX` list, the top bar (title, search, light/dark toggle that doesn't work yet), the home grid, audio buttons and footer. Shared by all pages.
- `style.css`: all styling. Shared by all pages.
- `media/`: screenshots and audio for sentence mining.
- `index.html`: the whole site in one file, so Seb can open it by double-clicking in any browser. Media is NOT embedded. Made by `build.py`, never edit or read it by hand. (Opened as a plain file in the Claude panel it becomes a frozen snapshot where media can't load and a hint shows instead; that's why we use the server below.)
- `.claude/launch.json`: the preview server config (`notebook`).

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
  - The sentence must END on the grammar point: nothing tacked on after it (no よ, ね, けど, a second sentence, etc.). 自信ないんだ, not 自信ないんだよ. For points that sit mid-sentence (は, が, を, な, のは), the sentence just shouldn't end in extra particles. The extras belong on their own pages.
  - Pick the shortest own card that shows the point (search the Sentence field). Later grammar can use longer sentences. Don't repeat the same card in Sentence mining below.
  - `.explain` must clearly DESCRIBE the grammar, not hint at a feeling: what it does, what it attaches to, what question this sentence answers, then the polite/casual (or other) variant. 3 short sentences, plain words, our own wording.
  - Polite and casual forms of the same grammar live on ONE page (decided 22 Oct 2026, no exceptions; です and だ were split for a while and merged back). If a point has another form, add a second card right under the first: `.lead.second`, its own real clip, a `.use` label ("Polite"/"Casual"), and only 1 or 2 sentences of `.explain`. The first card then gets a `.use` label too. Now on です / だ, ～の, ～んです, い-adj past.
  - New pages always get one. If no own card fits, ask Seb instead of using someone else's.
  - If the chosen card was in Sentence mining, move it up (remove it there). If its Source field is empty, write "Source unknown".
- "Examples": `.scenes` with `.scene` cards. Each card has `.sit` (situation), `.jp` (Japanese), `.en` (translation), optionally `.note` and a `.use` label at the bottom.
- "With and without": `.compare` grid of `.cbox` (plain) and `.cbox.yes` (with the grammar).
- "Sentence mining" (last section, optional): `.mines` with lighter `.mine` boxes. Each starts with a `.use` label: `<span class="use polite">Polite</span>` (soft green, not gold: gold means clickable, like the play button) or `<span class="use casual">Casual</span>` (blue), then a screenshot, `.src` (show, season, episode; ask Seb if unknown), a `.line` with a `.play` audio button and `.jp`, then `.en` and `.note`.
- Mining media comes from Seb's Anki cards (Migaku). Find the card in a copy of `~/Library/Application Support/Anki2/User 1/collection.anki2` (read only), copy the image and sentence audio from `collection.media` into `media/` (pages reference them as `../media/...`). Always use the Sentence Audio field, never Word Audio. Get the source from the card's Source field. Aim for about half Polite and half Casual cards on each page, when the deck allows it. Only use cards with ONE sentence, so the clip and line stay short enough to see the point quickly (decided 22 Oct 2026). Two short sentences are okay only when no single-sentence card fits. Only use cards that have a source: cards without one are often AI generated and sound less natural than clips from real videos. A YouTube link as source is shown as "YouTube · video" with the link.
- The grammar inside Japanese sentences is wrapped in `<mark class="g">`.
- No literal-translation lines under `.en` (tried 22 Oct 2026, Seb found it cluttered). A "Literally ..." inside a `.note` is fine when it really helps.

## Index (home grid and search)
- Grouped by JLPT level (currently only N5).
- Lives in the `INDEX` list at the top of `site.js`. Each item: `['id', 'pattern', 'short description']`, where id is the file name in `pages/`. The short description is a Bunpro-style label ("Subject marker", "Explaining, giving the reason") and shows on the grid card and under the pattern on the page.
- The home page ("All grammar") shows one foldable box per level (N5 etc., no lessons) with a grid of cards: pattern, short description, small level tag like "N5" (Seb likes it, keep it). No SRS stuff (no "Adept" or progress), this is a reference, not a learning tool. A new level is just a new group in `INDEX`.
- There is no sidebar and no section nav. Navigation is the sticky top bar on every page: the title (links home), a search, and a light/dark toggle. Tried separate "N5 Grammar" / "Concepts" pages with nav links on 22 Oct 2026; Seb preferred the one grid, so don't bring that back unless asked.
- Search matches the id, pattern and description (so `は`, `topic` and `wa` all work). On home it filters the cards; on other pages it shows a dropdown of matches. Enter opens the first match, Esc clears.
- Add a new page there, in the right level group, when you create it. The footer count updates itself; bump `UPDATED` to today's date.
- Cross-links between pages use `<a class="xref" href="id.html">`.

## Design (settled, don't change unless asked)
- Quiet dark theme: ink navy background, warm off-white text, one gold accent, soft blue for grammar and "with" boxes.
- Fonts: Newsreader (headings), IBM Plex Sans / Plex Sans JP (body), IBM Plex Mono (small labels).
- No glows, no orange or red for grammar.
- Top bar and home grid (Oct 2026): cards use the same `--card` surfaces as scene cards, gold border on hover. Inspired by Bunpro's grammar grid but in our palette.

## Open items
- Light mode: the toggle button in the top bar exists but does nothing yet. Needs a light palette (redefine the `:root` tokens) and the toggle wired up in `site.js`.

## Pages so far
N5: です / だ (one page, polite and casual together), な (draft, to be rewritten after we talk it through), は, が, を, ～んです・のです, ～の (questions), い-Adjective (Past), のは・のが.
Notes (not grammar, own "Notes" group in `INDEX`, left out of the footer grammar count, plain `.prose` sections): kana ("How I learned the kana", moved over from the wabisebi.com blog on 22 Oct 2026).
Other: home (the grid). (The "How I learn" page was removed on 22 Oct 2026; what's in "About Seb as a learner" above replaces it. A Nominalization concept page existed briefly and was removed on Seb's request.)
