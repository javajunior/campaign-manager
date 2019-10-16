import * as React from 'react'
import Head from 'next/head'

// Import Custom Components
import CampaignManager from '../components/CampaignManager'

const Home = () => (
  <>
    <Head>
      <title>Campaign Manager</title>
    </Head>
    <CampaignManager />
  </>
)

export default Home
