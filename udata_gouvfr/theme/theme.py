# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import

import logging
import re

import feedparser
import requests

from dateutil.parser import parse
from flask import g, current_app

from udata import theme
from udata.app import cache, nav
from udata.i18n import lazy_gettext as _

log = logging.getLogger(__name__)

RE_POST_IMG = re.compile(
    r'\<img .* src="https?:(?P<src>.+\.(?:png|jpg))" .* />(?P<content>.+)')

# Wordpress ATOM timeout
WP_TIMEOUT = 5


gouvfr_menu = nav.Bar('gouvfr_menu', [
    nav.Item(_('Discover OpenData'), 'gouvfr.faq', items=[
        nav.Item(_('As a citizen'), 'gouvfr.faq', {'section': 'citizen'}),
        nav.Item(_('As a producer'), 'gouvfr.faq', {'section': 'producer'}),
        nav.Item(_('As a reuser'), 'gouvfr.faq', {'section': 'reuser'}),
        nav.Item(_('As a developer'), 'gouvfr.faq', {'section': 'developer'}),
    ]),
    nav.Item(_('Data'), 'datasets.list', items=[
        nav.Item(_('Datasets'), 'datasets.list'),
        nav.Item(_('Reuses'), 'reuses.list'),
        nav.Item(_('Organizations'), 'organizations.list'),
    ]),
    nav.Item(_('Dashboard'), 'site.dashboard'),
    nav.Item(_('Territories'), 'territories.home'),
    nav.Item(_('Events'), '#', url='#', items=[
    nav.Item('Game of Code', 'gameofcode', url='http://www.gameofcode.eu/'),
    ]),
])

theme.menu(gouvfr_menu)

nav.Bar('gouvfr_footer', [
    nav.Item(_('As a citizen'), 'gouvfr.faq', {'section': 'citizen'}),
    nav.Item(_('As a producer'), 'gouvfr.faq', {'section': 'producer'}),
    nav.Item(_('As a reuser'), 'gouvfr.faq', {'section': 'reuser'}),
    nav.Item(_('As a developer'), 'gouvfr.faq', {'section': 'developer'}),
    ])

nav.Bar('gouvfr_footer_support', [
    nav.Item(_('API'), 'apidoc.swaggerui'),
    nav.Item(_('Terms of use'), 'site.terms'),
    nav.Item(_('Usage Guidelines for Open Data'), 'gouvfr.usage'),
])


@cache.memoize(50)
def get_blog_post(lang):
    wp_atom_url = current_app.config.get('WP_ATOM_URL')
    if not wp_atom_url:
        return

    feed = None

    for code in lang, current_app.config['DEFAULT_LANGUAGE']:
        feed_url = wp_atom_url.format(lang=code)
        try:
            response = requests.get(feed_url, timeout=WP_TIMEOUT)
        except requests.Timeout:
            log.error('Timeout while fetching %s', feed_url, exc_info=True)
            continue
        except requests.RequestException:
            log.error('Error while fetching %s', feed_url, exc_info=True)
            continue
        feed = feedparser.parse(response.content)
        if len(feed.entries) > 0:
            break

    if not feed or len(feed.entries) <= 0:
        return

    post = feed.entries[0]
    blogpost = {
        'title': post.title,
        'link': post.link,
        'date': parse(post.published)
    }
    match = RE_POST_IMG.match(post.content[0].value)
    if match:
        blogpost.update(image_url=match.group('src'),
                        summary=match.group('content'))
    else:
        blogpost['summary'] = post.summary
    return blogpost



@theme.context('home')
def home_context(context):
    context['blogpost'] = get_blog_post(g.lang_code)
    return context
