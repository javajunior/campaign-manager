import * as React from 'react'
import CampaignManager from '../components/CampaignManager'
import InitialData from '../public/initialData'
import renderer from 'react-test-renderer'

it('renders the "CampaignManager" component correctly', () => {
  const tree = renderer
    .create(<CampaignManager initialData={InitialData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
