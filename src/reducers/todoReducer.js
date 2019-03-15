const initialState = {
    todos: [
        {
            task: 'buy batteries',
            done: false,
            visible: true
        }
    ]
}

const todosReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            const newTodos = state.todos.slice()
            newTodos.push({task: action.text, done: false, visibility: true})
            return {
                todos: newTodos
            }

        case 'TOGGLE_TODO':
            const doneTodos = state.todos.slice()
            doneTodos[action.index].done = !doneTodos[action.index].done
            doneTodos[action.index].visible = !doneTodos[action.index].visible
            return {
                todos: doneTodos
            }

        default: 
            return state;
    }
}

export default todosReducer;