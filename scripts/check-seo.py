"""Validate built public HTML without executing JavaScript. Standard library only."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
ORIGIN = 'https://solobeauty.am'


class Page(HTMLParser):
    def __init__(self, content):
        super().__init__()
        self.tags = []
        self.text = []
        self.json = []
        self.in_json = False
        self.feed(content)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json = True

    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_json = False

    def handle_data(self, text):
        if self.in_json:
            self.json.append(json.loads(text))
        else:
            self.text.append(text)

    def find(self, tag, **attrs):
        return [a for t, a in self.tags if t == tag and all(a.get(k) == v for k, v in attrs.items())]


for language, path, phrase in [('hy', '/', 'Մեր Ծառայությունները'), ('ru', '/ru/', 'Услуги')]:
    page = Page((DIST / path.lstrip('/') / 'index.html').read_text())
    assert page.find('html')[0]['lang'] == language
    assert len(page.find('title')) == len(page.find('h1')) == 1
    assert phrase in ''.join(page.text)
    assert len(page.find('meta', name='description')) == 1
    assert page.find('link', rel='canonical') == [{'rel': 'canonical', 'href': ORIGIN + path}]
    expected = {'hy': ORIGIN + '/', 'ru': ORIGIN + '/ru/', 'x-default': ORIGIN + '/'}
    assert {a['hreflang']: a['href'] for a in page.find('link', rel='alternate')} == expected
    assert page.find('meta', property='og:url')[0]['content'] == ORIGIN + path
    assert not page.find('meta', name='robots')
    assert len(page.json) == 1
    graph = page.json[0]['@graph']
    salon = next(x for x in graph if x['@type'] == 'BeautySalon')
    assert salon['@id'] == ORIGIN + '/#salon'
    assert salon['telephone'] == '+37493000217'
    assert 'aggregateRating' not in salon and 'geo' not in salon and 'priceRange' not in salon
    assert len(salon['hasOfferCatalog']['itemListElement']) == 9
    assert graph[1]['inLanguage'] == language
    assert graph[1]['url'] == ORIGIN + path
    assert all(offer['itemOffered']['name'] in ''.join(page.text) for offer in salon['hasOfferCatalog']['itemListElement'])
    sections = {a['id'] for _, a in page.tags if 'id' in a}
    assert {'services', 'pricing', 'reviews', 'contact'} <= sections
    assert len(page.find('a', href='#contact')) >= 13
    assert page.find('a', href='/ru/', hreflang='ru')
    assert page.find('a', href='/', hreflang='hy')
    assert not page.find('a', href='tel:+37453988')
    for tag, attrs in page.tags:
        asset = attrs.get('src', '') if tag in ('script', 'img') else attrs.get('href', '') if tag == 'link' and attrs.get('rel') in ('stylesheet', 'modulepreload', 'icon') else ''
        if asset.startswith('/'):
            assert (DIST / asset.lstrip('/')).is_file(), asset
    for key in ('logo', 'image'):
        assert (DIST / urlparse(salon[key]).path.lstrip('/')).is_file()
    print(f'PASS {path}: static body, metadata, schema, language links, anchors, assets')

service_paths = {
    f'{prefix}/services/{slug}/'
    for prefix in ('', '/ru')
    for slug in ('manicure-pedicure', 'hair-coloring')
}
for path in sorted(service_paths):
    page = Page((DIST / path.lstrip('/') / 'index.html').read_text())
    language = 'ru' if path.startswith('/ru/') else 'hy'
    slug = path.rstrip('/').split('/')[-1]
    assert page.find('html')[0]['lang'] == language
    assert len(page.find('title')) == len(page.find('h1')) == len(page.find('meta', name='description')) == 1
    assert page.find('link', rel='canonical') == [{'rel': 'canonical', 'href': ORIGIN + path}]
    alternate = {
        'hy': ORIGIN + f'/services/{slug}/',
        'ru': ORIGIN + f'/ru/services/{slug}/',
        'x-default': ORIGIN + f'/services/{slug}/',
    }
    assert {a['hreflang']: a['href'] for a in page.find('link', rel='alternate')} == alternate
    assert page.find('meta', property='og:url')[0]['content'] == ORIGIN + path
    assert len(page.json) == 1
    graph = page.json[0]['@graph']
    salon, service, webpage = graph
    assert salon['@id'] == ORIGIN + '/#salon'
    assert salon['telephone'] == '+37493000217'
    assert salon['address']['streetAddress'] == 'Ռիժկովի փողոց 3/1'
    assert service['@type'] == 'Service' and service['provider']['@id'] == salon['@id']
    assert service['name'] in ''.join(page.text)
    assert webpage['inLanguage'] == language and webpage['url'] == ORIGIN + path
    assert webpage['primaryEntity']['@id'] == service['@id']
    assert page.find('a', href='https://apnt.app/solo_beauty')
    assert page.find('a', href='tel:+37493000217')
    other = 'hair-coloring' if slug == 'manicure-pedicure' else 'manicure-pedicure'
    prefix = '/ru' if language == 'ru' else ''
    assert page.find('a', href=f'{prefix}/services/{other}/')
    assert page.find('a', href=f'{"" if language == "ru" else "/ru"}/services/{slug}/', hreflang='hy' if language == 'ru' else 'ru')
    assert page.find('link', rel='stylesheet')
    for attrs in page.find('link', rel='stylesheet'):
        assert (DIST / attrs['href'].lstrip('/')).is_file()
    assert not page.find('script', type='module')
    print(f'PASS {path}: static service, metadata, schema, links, booking')

card = Page((DIST / 'card/index.html').read_text())
assert card.find('meta', name='robots')[0]['content'] == 'noindex, nofollow'
assert not card.json
sitemap = ElementTree.parse(DIST / 'sitemap.xml')
expected_urls = {ORIGIN + '/', ORIGIN + '/ru/'} | {ORIGIN + path for path in service_paths}
assert {x.text for x in sitemap.findall('.//{*}loc')} == expected_urls
source_sitemap = ElementTree.parse(ROOT / 'public/sitemap.xml')
assert {x.text for x in source_sitemap.findall('.//{*}loc')} == expected_urls
robots = RobotFileParser()
robots.parse((DIST / 'robots.txt').read_text().splitlines())
for bot in ('OAI-SearchBot', 'Googlebot', 'Bingbot', 'PerplexityBot'):
    for path in ('/', '/ru/', '/card/', '/assets/example.js'):
        assert robots.can_fetch(bot, ORIGIN + path), (bot, path)
print('PASS sitemap, search crawler rules, and cardholder noindex protection')
