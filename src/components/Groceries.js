import React, { Component } from 'react'
import { connect } from 'react-redux'

class Groceries extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      groceryItem: '',
      done: false,
    }
  }

  handleChangeGroceryItem(e) {
    e.preventDefault()
    this.setState({groceryItem: e.target.value})
  }

  handleSubmitNewGrocery(e) {
    e.preventDefault()
    this.props.addGrocery(this.state.groceryItem)
  }
  
  render() {
    return (
    <div>
      <div className="columns is-centered">
        <div className="column is-half">

          <div className="box m-auto">

            <h4 className="title is-4">Groceries</h4>

            <form onSubmit={(e) => this.handleSubmitNewGrocery(e)}>
              <div className="field has-addons">
                <div className="control">
                  <input className="input" 
                         type="text" 
                         placeholder="What's next?" 
                         onChange={(e) => this.handleChangeGroceryItem(e)}
                         value={this.props.groceries.task} />
                </div>
                <div className="control">
                  <button className="button is-primary" 
                          type="submit">Add</button>
                </div>
              </div>
            </form>

            <div className="content">
              <ul>
                {this.props.groceries.map((item, index) => <li key={index} onClick={() => this.props.toggleGrocery(index)} style={{textDecoration: item.done ? 'line-through': null}}>{item.task}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  groceries: state.groceriesReducer.groceries
})

const mapDispatchToProps = (dispatch) => ({
  addGrocery: (groceryText) => dispatch({type: 'ADD_GROCERY', text: groceryText}),
  toggleGrocery: (index) => dispatch({type: 'TOGGLE_GROCERY', index: index }) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Groceries)
