import Head from 'next/head'
import React from 'react'

export default class extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div >
        <Head>
          <title>My styled page</title>
        </Head>
      </div>
    )
  }
}
