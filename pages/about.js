import React, { Component } from 'react'

import Page from '../src/Page'
import Hero from '../src/Hero'

export default () => (
  <Page stickHeader={true}>
    <Hero>
      <h1>About Us</h1>
    </Hero>
  </Page>
)