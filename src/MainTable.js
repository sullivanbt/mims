import React from "react"
import studentData from './data_test'
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class MainTable extends React.Component {
  constructor() {
    super()
    this.state = {
      schoolName: 'TestHigh'
    }
  }


  render(){
    return(
      <div>
        <ReactTable
          data={studentData}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  id: "firstName",
                  accessor: d => d.firstName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["firstName"] }),
                  filterAll: true
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lastName"] }),
                  filterAll: true
                },
                {
                  Header: "Grade",
                  id: "grade",
                  accessor: d => d.grade,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["grade"] }),
                  filterAll: true
                },
                {
                  Header: "Class Period",
                  id: "classPeriod",
                  accessor: d => d.classPeriod,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["classPeriod"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Instrument",
                  id: "instrument",
                  accessor: d => d.instrument,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["instrument"] }),
                  filterAll: true
                },
                {
                  Header: "Instrument SN",
                  id: "instrumentSN",
                  accessor: d => d.instrumentSN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["instrumentSN"] }),
                  filterAll: true
                },
                {
                  Header: "Mouthpiece SN",
                  id: "mouthpieceSN",
                  accessor: d => d.mouthpieceSN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mouthpieceSN"] }),
                  filterAll: true
                },
                {
                  Header: "Locker",
                  id: "locker",
                  accessor: d => d.locker,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["locker"] }),
                  filterAll: true
                },
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    )
  }
}
export default MainTable
