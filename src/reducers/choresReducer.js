function deepCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }

const initialState = {
    chores: [
        {
            who: '', 
            chore: 'Let\'s do this',
            priority: ''
        }
    ]
}

const choresReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_CHORE':
            const newChore = deepCopy(state)
            newChore.chores.push({who: action.who, 
                                chore: action.chore, 
                                priority: action.priority})
            return newChore

        case 'TOGGLE_CHORE':
            const doneChores = state.chores.slice()
            doneChores[action.index].done = !doneChores[action.index].done
            return {
                chores: doneChores
            }

        default: 
            return state;
    }
}

export default choresReducer;





        // case 'ADD_CHORE':
        //     const newChores = state.chores.slice()
        //     newChores.push({chore: action.text, done: false})
        //     return {
        //         chores: newChores
        //     }
        
        // case 'ADD_WHEN':
        //     const newWhen = state.chores.slice()
        //     newWhen.push({when: action.text, done: false})
        //     return {
        //         when: newWhen
        //     }