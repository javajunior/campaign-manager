import React, { useState, useEffect } from 'react'
import { isPast, isWithinInterval, isToday, isBefore } from 'date-fns'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { Search, Grid } from 'semantic-ui-react'

// Custom component(s)
import CampaignTable from './CampaignTable'
import CampaignTableRow from './CampaignTableRow'

// Declare global window interface to avoid Typescript errors
declare global {
  interface Window {
    // Add Addcampaigns as a method on the window obj
    AddCampaigns: any
  }
}

const CampaignManager = props => {
  // State initiation with React Hooks

  // Initialize required states for date picker
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setfocusedInput] = useState(null)

  // Initialize required states for search field
  const [query, setQuery] = useState('')
  const [data, setData] = useState(props.initialData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.AddCampaigns = arr => {
      // check if the input is an array
      if (Array.isArray(arr)) {
        // loop through the array
        arr.forEach(item => {
          // check if end date is before start date
          if (isBefore(new Date(item.endDate), new Date(item.startDate))) {
            throw new Error(
              "Invalid dates. End date can't be before start date",
            )
          }
        })
        // if everything is okay, update the state and append the new array
        return setData([...data, ...arr])
      } else {
        console.log('Please give me an array!')
      }
    }
  })

  const handleSearchChange = e => {
    setQuery(e.target.value)
    setLoading(true)

    setTimeout(() => {
      setLoading(false) // stop loading animation after 500ms
    }, 500)
  }

  // Helper functions
  const isActive = element =>
    !isPast(new Date(element.endDate)) || isToday(new Date(element.endDate))

  const withinInterval = element =>
    endDate !== null && startDate !== null
      ? isWithinInterval(new Date(element.endDate), {
          start: new Date(startDate),
          end: new Date(endDate),
        }) || isActive(element)
      : false

  return (
    <div className="wrapper">
      <h2>Campaign Manager</h2>
      <Grid>
        <Grid.Column width={6}>
          <DateRangePicker
            startDate={startDate}
            startDateId="start_date_id"
            endDate={endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate)
              setEndDate(endDate)
            }}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setfocusedInput(focusedInput)}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Search
            fluid
            loading={loading}
            onSearchChange={handleSearchChange}
            placeholder="Type Campaign Name Here"
          />
        </Grid.Column>
      </Grid>

      <CampaignTable data={data}>
        {data.map((element, index) => {
          if (
            element.name.toLowerCase().includes(query.toLowerCase()) ||
            query === ''
          ) {
            // when there's no date range yet
            if (endDate === null && startDate === null) {
              return (
                <CampaignTableRow
                  element={element}
                  isActive={isActive(element)}
                  key={index}
                />
              )
            } else {
              return (
                // only return the elements within the interval
                withinInterval(element) && (
                  <CampaignTableRow
                    element={element}
                    isActive={isActive(element)}
                    key={index}
                  />
                )
              )
            }
          }
          return null // if there's no match, don't return anything
        })}
      </CampaignTable>

      {/* Update/ override some semantic UI styles */}
      <style>{`
        .wrapper {
          max-width: 90%;
          margin: 0 auto;
          margin-top: 30px;
        }
        .results {
          display:none;
          opacity: 0;
          transform: scale(0)
        }
        .input{
          width: 400px;
          margin: 0 auto;
          display: block;
          height: 50px;
          border: 1px solid grey;
          border-radius: 40px;
        }
      `}</style>
    </div>
  )
}

export default CampaignManager
