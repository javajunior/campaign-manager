import React, { useState } from 'react'
import _ from 'lodash'
import faker from 'faker'
import 'react-dates/initialize'
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { Table, Search, Grid, Header, Segment } from 'semantic-ui-react'

const CampaignManager = () => {
  // State initiation with React Hooks

  // Required for DatePicker
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setfocusedInput] = useState(null)

  return (
    <div className="wrapper">
      <Grid>
        <Grid.Column width={6}>
          <DateRangePicker
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId="start_date_id" // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId="end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate)
              setEndDate(endDate)
              console.log(startDate, endDate, focusedInput)
            }} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => setfocusedInput(focusedInput)} // PropTypes.func.isRequired,
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Search
            fluid
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
            // {...this.props}
          />
        </Grid.Column>
      </Grid>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Budget</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>Requires call</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>Requires call</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>Requires call</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>Requires call</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>3 People</Table.HeaderCell>
            <Table.HeaderCell>2 Approved</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Footer>
      </Table>
      <style jsx>{`
        .wrapper {
          max-width: 90%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default CampaignManager
