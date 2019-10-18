import * as React from 'react'
import CampaignTable from '../components/CampaignTable'
import InitialData from '../public/initialData'
import renderer from 'react-test-renderer'

it('renders the "CampaignTable" component correctly', () => {
  const tree = renderer.create(<CampaignTable data={InitialData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
