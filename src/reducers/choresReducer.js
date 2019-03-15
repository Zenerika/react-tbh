const initialState = {
    chores: [
        {
            chore: 'Let\'s do this',
            done: false
        }
    ]
}

const choresReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_CHORE':
            const newChores = state.chores.slice()
            newChores.push({chore: action.text, done: false})
            return {
                chores: newChores
            }

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