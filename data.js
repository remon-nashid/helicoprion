///////////////////////////////////////////////////////////////////////
// The Girls
// http://www.crossfit.com/cf-info/faq.html
///////////////////////////////////////////////////////////////////////


var movements = {
  '/movement/pull-up': {
    'id': '/movement/pull-up',
    'name': 'Pull up',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  '/movement/push-up': {
    'id': '/movement/push-up',
    'name': 'Push up',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/sit-up': {
    'id': '/movement/sit-up',
    'name': 'Sit up',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/run': {
    'id': '/movement/run',
    'name': 'Run',
    'equipment': ['bodyweight'],
    'aspects': ['distance', 'load'],
  },
  '/movement/snatch': {
    'id': '/movement/snatch',
    'name': 'Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean': {
    'id': '/movement/clean',
    'name': 'Clean',
    'equipment': ['barbell', 'dumbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-air': {
    'id': '/movement/squat-air',
    'name': 'Air Squat',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-back': {
    'id': '/movement/squat-back',
    'name': 'Back Squat',
    'parent': '/movement/squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-overhead': {
    'id': '/squat-overhead',
    'parent': '/movement/squat',
    'name': 'Overhead Squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-front': {
    'id': '/movement/squat-front',
    'parent': '/movement/squat',
    'name': 'Front Squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/pistol': {
    'id': '/movement/pistol',
    'parent': '/movement/squat',
    'name': 'Pistol',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-squat': {
    'id': '/movement/clean-squat',
    'name': 'Squat Clean',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/deadlift': {
    'id': '/movement/deadlift',
    'name': 'Deadlift',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/bench-press': {
    'id': '/movement/bench-press',
    'name': 'Bench Press',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/handstand-push-up': {
    'id': '/movement/handstand-push-up',
    'name': 'Handstand Push Up',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/ring-dips': {
    'id': '/movement/ring-dips',
    'name': 'Ring Dips',
    'equipment': ['rings'],
    'aspects': ['reps', 'load'],
  },
  '/movement/thruster': {
    'id': '/movement/thruster',
    'name': 'Thruster',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-and-jerk': {
    'id': '/movement/clean-and-jerk',
    'name': 'Clean and Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/kettlebell-swing': {
    'id': '/movement/kettlebell-swing',
    'name': 'Kettlebell Swing',
    'equipment': ['kettlebell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/row': {
    'id': '/movement/row',
    'name': 'Row',
    'equipment': ['rower'],
    'aspects': ['distance', 'damping'],
  },
  '/movement/wall-ball-shot': {
    'id': '/movement/wall-ball-shot',
    'name': 'Wall Ball Shot',
    'equipment': ['medicine-ball'],
    'aspects': ['reps', 'load'],
  },
  '/movement/jump-rope': {
    'id': '/movement/jump-rope',
    'name': 'Jump Rope',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
  },
  '/movement/jump-rope-du': {
    'id': '/movement/jump-rope-du',
    'name': 'Double Under',
    'parent': '/movement/jump-rope',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
  },
  '/movement/box-jump': {
    'id': '/movement/box-jump',
    'name': 'Box Jump',
    'equipment': ['box'],
    'aspects': ['reps', 'height'],
  },
};

var workouts = [
  // For time
  //
  // 100 Pull-ups
  // 100 Push-ups
  // 100 Sit-ups
  // 100 Squats
  {
    name: 'Angie',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime'
    },
    clusters: [{
      'units': [
        {
          movementID: movements['/movement/pull-up'].id,
          rx: {reps: 100}
        }, {
          movementID: movements['/movement/push-up'].id,
          rx: {reps: 100}
        }, {
          movementID: movements['/movement/sit-up'].id,
          rx: {reps: 100}
        }, {
          movementID: movements['/movement/squat-air'].id,
          rx: {reps: 100}
        }
      ]
    }]
  },
  // Barbara
  //
  // 5X
  // 20 Pull-ups
  // 30 Push-ups
  // 40 Sit-ups
  // 50 Squats
  // Rest precisely three minutes between each round.
  {
    name: 'Barbara',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
      restBetweenRounds: 3*60,
    },
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 20}
      },{
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 30}
      }, {
        movementID: movements['/movement/sit-up'].id,
        rx: {reps: 40}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 50}
      }]
    }]
  },
  // Each min on the min for 30 min
  // 5 Pull-ups
  // 10 Push-ups
  // 15 Squats
  {
    name: 'Chelsea',
    scoring: {
      'name': 'Emom 30',
      'type': 'FixedInterval',
      'intervals': 30*60,
      'intervalWork': 60,
      // Implied 'intervalRest': 0
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 5}
      },{
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 10}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Cindy
  //
  // 5 Pull-ups
  // 10 Push-ups
  // 15 Squats
  //
  // As many rounds as possible in 20 min
  {
    name: 'Cindy',
    scoring: {
      name: 'AMRAP 20',
      type: 'FixedWorkVariableTime',
      timeCap: 20*60,
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 5}
      },{
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 10}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Diane
  //
  // Deadlift 225/155 lbs
  // Handstand push-ups
  //
  // 21-15-9 reps, for time
  {
    name: 'Diane',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {'load': [225, 155], 'reps': '21 - round*6'}
      }, {
        movementID: movements['/movement/handstand-push-up'].id,
        rx: {'reps': '21 - round*6'}
      }]
    }]
  },
  // Elizabeth
  //
  // 21-15-9 reps, for time
  //
  // Clean 135/95 lbs
  // Ring Dips
  {
    name: 'Elizabeth',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/clean-squat'].id,
        rx: {'reps': '21 - round*6', 'load': [135, 95]}
      }, {
        movementID: movements['/movement/ring-dips'].id,
        rx: {'reps': '21 - round*6'}
      }]
    }]
  },
  // Fran
  //
  // Thruster 95/65 lbs
  // Pull-ups
  //
  // 21-15-9 reps, for time
  {
    name: 'Fran',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/thruster'].id,
        rx: {'reps': '21 - round*6', 'load': [95, 65]}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {'reps': '21 - round*6'}
      }]
    }]
  },
  // Grace
  //
  // Clean and Jerk 135/95 lbs
  //
  // 30 reps for time
  {
    name: 'Grace',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/clean-and-jerk'].id,
        rx: {'reps': '21 - round*6', 'load': [135, 95]}
      }]
    }]
  },
  // Helen
  //
  // 3X
  // 400 meter run
  // 1.5 pood Kettlebell swing x 21
  // Pull-ups 12 reps
  {
    name: 'Helen',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400}
      }, {
        movementID: movements['/movement/kettlebell-swing'].id,
        rx: {'load': [53, 35], 'reps': 21}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {'reps': 12}
      }]
    }]
  },
  // Isabel
  //
  // Snatch 135/95 pounds
  //
  // 30 reps for time
  {
    name: 'Isabel',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/snatch'].id,
        rx: {'load': [135, 95], 'reps': 30}
      }]
    }]
  },
  // Jackie
  //
  // 1000 meter row
  // Thruster 45 lbs (50 reps)
  // Pull-ups (30 reps)
  {
    name: 'Jackie',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {'distance': 1000}
      }, {
        movementID: movements['/movement/thruster'].id,
        rx: {'load': 45}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {'reps': 30}
      }]
    }]
  },
  // Karen
  //
  // Wall-ball 150 shots
  {
    name: 'Karen',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {reps: 150, load: [20, 14]}
      }]
    }]
  },
  // Linda
  //
  // Deadlift 1 1/2 BW
  // Bench BW
  // Clean 3/4 BW
  //
  // 10/9/8/7/6/5/4/3/2/1 rep
  // rounds for time
  {
    name: 'Linda',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 10,
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {reps: '10 - $round', 'load': '1.5 * $BW'}
      }, {
        movementID: movements['/movement/bench-press'].id,
        rx: {reps: '10 - $round', 'load': '$BW'}
      }, {
        movementID: movements['/movement/clean-squat'].id,
        rx: {reps: '10 - $round', 'load': '0.75 * $BW'}
      }]
    }]
  },
  // Mary
  //
  // 5 Handstand push-ups
  // 10 1-legged squats
  // 15 Pull-ups
  //
  // As many rounds as possible in 20 min
  {
    name: 'Mary',
    scoring: {
      name: 'AMRAP 20',
      type: 'FixedTimeVariableWork',
      measure: 'rounds',
      timeCap: 1200,
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/handstand-push-up'].id,
        rx: {reps: 5}
      }, {
        movementID: movements['/movement/pistol'].id,
        rx: {reps: 10}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Nancy
  //
  // 400 meter run
  // Overhead squat 95/65 lbs x 15
  //
  // 5 rounds for time
  {
    name: 'Nancy',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400}
      }, {
        movementID: movements['/movement/squat-overhead'].id,
        rx: {reps: 15, load: [95, 65]}
      }]
    }]
  },
  // Annie
  //
  // Double-unders
  // Sit-ups
  //
  // 50-40-30-20 and 10 rep rounds; for time
  {
    name: 'Annie',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/jump-rope-du'].id,
        rx: {reps: '50-10*$round'}
      }, {
        movementID: movements['/movement/sit-up'].id,
        rx: {reps: '50-10*$round'}
      }]
    }]
  },
  // Eva
  //
  // Run 800 meters
  // 2 pood KB swing, 30 reps
  // 30 pullups
  //
  // 5 rounds for time
  {
    name: 'Eva',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 800}
      }, {
        movementID: movements['/movement/kettlebell-swing'].id,
        rx: {reps: 30, load: 70}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 30}
      }]
    }]
  },
  // Kelly
  //
  // Run 400 meters
  // 30 box jump, 24 inch box
  // 30 Wall ball shots, 20 pound ball
  //
  // 5 rounds for time
  {
    name: 'Kelly',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 800}
      }, {
        movementID: movements['/movement/box-jump'].id,
        rx: {reps: 30, height: [24, 20]}
      }, {
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {reps: 30, load: [20, 14]}
      }]
    }]
  },
  // TODO needs work on scoring part
  // Lynne
  //
  // Bodyweight bench press (e.g., same amount on bar as you weigh)
  // pullups
  //
  // 5 rounds for max reps. There is NO time component to this WOD, although some versions Rx the movements as a couplet.
  {
    name: 'Lynne',
    scoring: {
      type: 'VariableTimeVariableWork',
      aspects: ['reps'],
    },
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/bench-press'].id,
        rx: {reps: '$MAX', load: '$BW'}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: '$MAX'}
      }]
    }]
  },
  // Nicole
  //
  // Run 400 meters
  // Max rep Pull-ups
  //
  // As many rounds as possible in 20 minutes.
  // Note number of pull-ups completed for each round.
  {
    name: 'Nicole',
    scoring: {
      type: 'FixedTimeVariableWork',
      timeCap: 1200,
      aspect: 'reps'
    },
    clusters: [{
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: '$MAX'}
      }]
    }]
  },
];

module.exports = {
  'workouts': workouts,
  'movements': movements,
};
