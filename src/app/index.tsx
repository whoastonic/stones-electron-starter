import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import manifest from '../manifest.json'
import './index.css'

const Hello = loadable(async () => await import('../views/Hello'))
const World = loadable(async () => await import('../views/World'))

export const App = (): ReactElement => (
  <>
    <ManifestHelmet/>
    <main className="container">
      <Switch>
        <Route path="/" component={Hello} exact/>
        <Route path="/world" component={World} exact/>
      </Switch>
    </main>
  </>
)

const ManifestHelmet = (): ReactElement => (
  <Helmet
    titleTemplate={`${manifest.short_name} | %s`}
    defaultTitle={manifest.short_name}
    htmlAttributes={{ lang: 'en-US' }}
    link={[
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]}
    meta={[
      {
        property: 'site_name',
        content: manifest.name
      },
      {
        property: 'title',
        content: manifest.short_name
      },
      {
        name: 'description',
        content: manifest.description
      },
      {
        charSet: 'utf-8'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:creator',
        content: 'Alex Taxiera'
      },
      {
        name: 'twitter:title',
        content: manifest.short_name
      },
      {
        name: 'twitter:description',
        content: manifest.description
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        name: 'theme-color',
        content: manifest.theme_color
      },
      {
        name: 'description',
        content: manifest.description
      },
      {
        name: 'keywords',
        content: manifest.keywords.join(', ')
      }
    ]}
  />
)
