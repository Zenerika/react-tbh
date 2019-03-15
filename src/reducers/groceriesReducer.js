const initialState = {
    groceries: [
        {
            task: 'milk',
            done: false
        }
    ]
}

const groceriesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_GROCERY':
            const newGroceries = state.groceries.slice()
            newGroceries.push({task: action.text, done: false})
            return {
                groceries: newGroceries
            }

        case 'TOGGLE_GROCERY':
            const doneGroceries = state.todos.slice()
            doneGroceries[action.index].done = !doneGroceries[action.index].done
            return {
                groceries: doneGroceries
            }

        default: 
            return state;
    }
}

export default groceriesReducer;