const initialState = {
    chores: [
        {
            who: '', 
            chore: 'Let\'s do this',
            when: '',
            due: true,
            urgent: false,
            pastdue: false,
            done: false
        }
    ]
}

const choresReducer = (state = initialState, action) => {
    
    switch (action.type) {
        // case 'ADD_WHO':
        //     const newWho = state.chores.slice()
        //     console.log('state.chores', state.chores)
        //     newWho.push({who: action.text, done: false})
        //     return {
        //         who: newWho
        //     }
        
        case 'ADD_CHORE':
            const newChores = state.chores.slice()
            newChores.push({chore: action.text, who: action.text1, when: action.text2, done: false})
            return {
                chores: newChores
            }
        
        // case 'ADD_WHEN':
        //     const newWhen = state.chores.slice()
        //     newWhen.push({when: action.text, done: false})
        //     return {
        //         when: newWhen
        //     }

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