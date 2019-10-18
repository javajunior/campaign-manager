import React from 'react'
import { Table } from 'semantic-ui-react'

// The campaign table skeleton
const CampaignTable = props => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Campaign Name</Table.HeaderCell>
        <Table.HeaderCell>Start Date</Table.HeaderCell>
        <Table.HeaderCell>End Date</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Budget</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>{props.children}</Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>{props.data.length} Total Campaigns</Table.HeaderCell>
        <Table.HeaderCell />
        <Table.HeaderCell />
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
export default CampaignTable
