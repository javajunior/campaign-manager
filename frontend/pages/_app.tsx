import * as React from 'react'
import App from 'next/app'

// Custom Page Initiation for Next.js
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps}></Component>
  }
}

export default MyApp
