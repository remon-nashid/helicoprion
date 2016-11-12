/**
 * @flow
 */

const movements = require('./data').movements;
const workouts = require('./data').workouts;
const r = require('rethinkdb');
const _ = require('lodash');
const movementsArray = _.values(movements);
const workoutsArray = _.values(workouts);
const p = r.connect({db: 'wodmeup'});

p.then(function(conn) {
  // Movements
  r.tableCreate('movements').run(conn, function() {
    r.table('movements').insert(movementsArray).run(conn, function(err, result) {
      console.log(err);
      console.log(result);
    });
  });
  
  // Workouts
  r.tableCreate('workouts').run(conn, function() {
    r.table('workouts').insert(workoutsArray).run(conn, function(err, result) {
      console.log(err);
      console.log(result);
    });
  });
}).error(function(err){
  console.log(err);
});