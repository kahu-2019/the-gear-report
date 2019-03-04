// db tickets.js

const connection = require('./connection')

function addTicket(user, title, description, severity, location, testDb){
  const db = testDb || connection
  return db('tickets')
  .insert({
    user_id: user,
    title: title,
    description: description,
    severity: severity
  })
  .then(async newTicketId => {
    await Promise.all (location.map(id => {
      if(typeof id == 'number'){
        return db('ticket_loc').insert({
          ticket_id: newTicketId[0], 
          loc_id: id
        })
      }
    }))
    return newTicketId
  })
  .catch(err => {
    console.log(err)
  }) 
}

function getAllTickets(testDb) {
  const db = testDb || connection
  return db('tickets')
}

function getTicketById(ticketId, testDb) {
  const db = testDb || connection
  return db('tickets')
  .join('users', 'users.id', 'tickets.user_id')
  .where('tickets.id', ticketId).select(
    'tickets.id', 'tickets.title',
    'tickets.description',
    'tickets.severity',
    'tickets.img',
    'tickets.has_grant',
    'tickets.created_at',
    'tickets.updated_at',
    'tickets.user_id',
    'users.name',
    'users.admin',
    'users.profile_url'
  )
}

function getTicketsByIds(ticketArr, testDb) {
  const db = testDb || connection
  return db('tickets').whereIn('id', ticketArr).orderBy('created_at', 'desc')
}

function getTicketLocationsById(ticketId, testDb) {
  const db = testDb || connection 
  return db('ticket_loc')
  .where('ticket_id', ticketId)
  .join('locations', 'locations.id', 'loc_id')
  .orderBy('depth')
  .select()

}

// getTicketCreator By Ticket Id... could be moved into a users db file, though this seems more relavent
// to ticket related functions
function getTicketCreator(creatorId, testDb) {
  const db = testDb || connection
  return db('users')
  .where('id', creatorId).select().first()
}

module.exports = {
  addTicket,
  getAllTickets,
  getTicketById,
  getTicketLocationsById,
  getTicketCreator,
  getTicketsByIds
}