import React from 'react'
import Head from 'next/head'
import initialData from '../public/initialData'

// Import Custom Components
import CampaignManager from '../components/CampaignManager'

const Home = () => (
  <>
    <Head>
      <title>Campaign Manager</title>
    </Head>
    <CampaignManager initialData={initialData} />
  </>
)

export default Home
