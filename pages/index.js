import React, { memo } from 'react'
import Head from 'next/head'

import Homepage from 'components/homepage'
import Container from 'components/container'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Denomination Rupiah</title>
      </Head>
      <Container>
        <Homepage />
      </Container>
    </div>
  )
}

export default memo(Index)
