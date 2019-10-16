import * as React from 'react'
import Head from 'next/head'

// The pages/_error.js component is only used in production.
// In development you get an error with call stack to know
// where the error originated from.

function Error({ statusCode }) {
  return (
    <p>
      <Head>
        <title>Page Not Found</title>
      </Head>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client' /* In Production */}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
