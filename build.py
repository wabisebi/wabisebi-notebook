# Makes index.html: every page, the styles and the script squeezed into one file,
# so the site can be browsed inside the Claude app as well as in a browser. Run after changing anything: python3 build.py
# Media stays in media/ (the Claude panel won't open files over ~500 KB), so images and audio only show in Safari or Chrome.
import os, re

root = os.path.dirname(os.path.abspath(__file__))

def read(*p):
    return open(os.path.join(root, *p), encoding='utf-8').read()

site_js = read('strokes.js') + read('site.js')
css = read('style.css')
ids = ['start', 'home'] + re.findall(r"\['([a-z0-9-]+)',", site_js) + ['kana', 'katakana', 'kanji', 'kana-game', 'numbers', 'resources']  # start first: it's the page index.html opens on; start, kana, katakana, kanji, kana-game, numbers and resources are not in INDEX

fonts = ''
parts = []
for pid in ids:
    page = read('pages', pid + '.html')
    if not fonts:
        fonts = re.search(r'<link rel="stylesheet" href="(https://fonts[^"]+)">', page).group(1)
    body = re.search(r'<main>\n(.*?)\n\s*<p class="foot"', page, re.S).group(1).rstrip()
    body = re.sub(r'<(article|section)([^>]*id="%s"[^>]*)>' % pid, r'<\1\2 data-page hidden>', body, count=1)
    body = re.sub(r'href="([a-z0-9-]+)\.html"', r'href="#\1"', body)
    body = body.replace('="../media/', '="media/')
    parts.append('    <!-- %s -->\n%s' % (pid, body))

out = '''<!doctype html>
<html lang="en">
<!-- Made by build.py from pages/, style.css and site.js. Don't edit this file, edit those and rebuild. -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Wabisebi Grammar Notebook</title>
<link rel="stylesheet" href="%s">
<style>
%s</style>

<header class="top" id="top"></header>
<div class="layout">
  <main>
%s

    <p class="foot" id="foot"></p>
  </main>
</div>
<script>window.BUNDLE = true;</script>
<script>
%s</script>
''' % (fonts, css, '\n\n'.join(parts), site_js)

open(os.path.join(root, 'index.html'), 'w', encoding='utf-8').write(out)
print('index.html: %d pages, %d KB' % (len(ids), len(out) // 1024))
