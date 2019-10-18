import React from 'react'
import numbro from 'numbro'
import { Table } from 'semantic-ui-react'

// Single row for the campaign table
const CampaignTableRow = ({ element, isActive }) => (
  <Table.Row>
    <Table.Cell>{element.id}</Table.Cell>
    <Table.Cell>{element.name}</Table.Cell>
    <Table.Cell>{element.startDate} </Table.Cell>
    <Table.Cell>{element.endDate}</Table.Cell>
    <Table.Cell negative={!isActive} positive={isActive}>
      {!isActive ? 'Ina' : 'A'}ctive
    </Table.Cell>
    <Table.Cell>
      {/* Use the numbro package to format the budget numbers */}
      {numbro(element.Budget).format({
        average: true,
        mantissa: 2,
      })}
    </Table.Cell>
  </Table.Row>
)

export default CampaignTableRow
