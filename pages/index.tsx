import React from 'react'
import Head from 'next/head'
import InitialData from '../public/initialData'

// Import Custom Components
import CampaignManager from '../components/CampaignManager'

const Home = () => (
  <>
    <Head>
      <title>Campaign Manager</title>
    </Head>
    <CampaignManager initialData={InitialData} />
  </>
)

export default Home
