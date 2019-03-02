import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionStack from './ActionStack'
import MaterialTable from 'material-table'

import {getAllTickets} from '../api/local/tickets'

export class AllTickets extends React.Component {

  componentDidMount() {
    console.log('componendDidMount');
    this.props.getAllTickets()
  }

  render() {
    return (
      <div className='tickets-container'>
      {this.props.allTickets.allTickets &&
        <MaterialTable
          columns={[
            { title: 'Title', field: 'title', filtering: false, },
            { title: 'Severity', field: 'severity', type: 'numeric', },
            { title: 'Sponsored', field: 'has_grant', type: 'boolean' },
            { title: 'Created By', field: 'createdBy'},
            { title: 'Date Created', field: 'created_at', type: 'date', filtering: false,},
            { title: 'Last Updated', field: 'updated_at', type: 'numeric', filtering: false,},
          ]}
          data={this.props.allTickets.allTickets}
          title="All Tickets For New Zealand"
          options={{
            filtering: true,
          }}
          actions={[
            {
              icon: 'more_horiz',
              tooltip: 'More Info',
              onClick: (event, rowData) => {
                console.log(rowData);
                location.href=`/tickets/ticketId/${rowData.id}`
              },
            },
          ]}
        />
        }
      </div>
    )
  }
}

function mapStateToProps({ allTickets }){
  return {
    allTickets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAllTickets}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)