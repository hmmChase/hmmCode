// https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript
// https://xstate.js.org/

const createMachine = stateMachineDefinition => {
  // machine object

  const machine = {
    value: stateMachineDefinition.initialState,
    transition(currentState, event) {
      const currentStateDefinition = stateMachineDefinition[currentState];
      const destinationTransition = currentStateDefinition.transitions[event];

      if (!destinationTransition) return;

      const destinationState = destinationTransition.target;
      const destinationStateDefinition =
        stateMachineDefinition[destinationState];

      destinationTransition.action();
      currentStateDefinition.actions.onExit();
      destinationStateDefinition.actions.onEnter();

      machine.value = destinationState;

      return machine.value;
    }
  };

  return machine;
};

// here's how we'll create the state machine
const machine = createMachine({
  // state machine definition object here...

  initialState: false,

  false: {
    actions: {
      onEnter() {
        console.log('false: onEnter');
      },
      onExit() {
        console.log('false: onExit');
      }
    },
    transitions: {
      switch: {
        target: true,
        action() {
          console.log('transition action for "switch" in "false" state');
        }
      }
    }
  },

  true: {
    actions: {
      onEnter() {
        console.log('true: onEnter');
      },
      onExit() {
        console.log('true: onExit');
      }
    },
    transitions: {
      switch: {
        target: false,
        action() {
          console.log('transition action for "switch" in "true" state');
        }
      }
    }
  }
});

// here's how we use the state machine
// comments are what we _want_ to have logged
let state = machine.value;

console.log(`current state: ${state}`); // current state: false

state = machine.transition(state, 'switch');
console.log(`current state: ${state}`); // current state: true

state = machine.transition(state, 'switch');
console.log(`current state: ${state}`); // current state: false
