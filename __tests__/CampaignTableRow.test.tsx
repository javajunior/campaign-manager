import * as React from 'react'
import CampaignTableRow from '../components/CampaignTableRow'
import renderer from 'react-test-renderer'

it('renders the "CampaignTableRow" component correctly', () => {
  const tree = renderer
    .create(
      <CampaignTableRow
        element={{
          id: 1,
          name: 'Divavu',
          startDate: '9/19/2017',
          endDate: '3/9/2018',
          Budget: 88377,
        }}
        isActive={true}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
