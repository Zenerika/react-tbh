import React, { Component } from 'react'
import { connect } from 'react-redux'
import Quote from './Quote'
import axios from 'axios'

class Chores extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      who: '', 
      chore: '',
      when: '',
      done: false,
      quote: '"To thy own self be true."'
    }
    this.changeQuote = this.changeQuote.bind(this)
  }
  
  changeQuote(newQuote) {
    this.setState({quote: newQuote})
  }

  componentDidMount() {
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=')
    .then((response) => {
      console.log('response: ', response);
      this.changeQuote(response.data[0].content)
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
  }

  handleChangeChore(e) {
    e.preventDefault()
    this.setState({chore: e.target.value})
  }

  handleSubmitNewChore(e) {
    e.preventDefault()
    this.props.addChore(this.state.chore)
    this.setState({chore: ''})
  }
  
  render() {
    return (
    <div>
    <Quote quote={this.state.quote}/> 
      <div className="columns is-centered">
        <div className="column is-half">

          <div className="box m-auto">

            <h4 className="title is-4">Chores</h4>

            <form onSubmit={(e) => this.handleSubmitNewChore(e)}>
              <div className="field has-addons">
                <div className="control">
                  <input className="input" 
                         type="text" 
                         placeholder="Add a chore..." 
                         onChange={(e) => this.handleChangeChore(e)}
                         value={this.state.chore} />
                </div>
                <div className="control">
                  <button className="button is-primary" 
                          type="submit">Add</button>
                </div>
              </div>
            </form>

            <div className="content">
              <ul>
                {this.props.chores.map((item, index) => 
                <li key={index} onClick={() => 
                this.props.toggleChore(index)} 
                style={{textDecoration: item.done ? 'line-through': null}}>
                {item.chore}</li>)}
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
  chores: state.choresReducer.chores
})

const mapDispatchToProps = (dispatch) => ({
  addChore: (choreText) => dispatch({type: 'ADD_CHORE', text: choreText}),
  toggleChore: (index) => dispatch({type: 'TOGGLE_CHORE', index: index }) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Chores)
