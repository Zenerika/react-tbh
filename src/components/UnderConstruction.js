import React, { Component } from 'react'
import Cone from '../styles/img/cone.png'

const pardonStyle = {
    fontSize: "40px",
    color: "white",
    textAlign: "center",
    width: "100%",
    marginTop: "100px",
    alignItems: "center",
}

class UnderConstruction extends Component {
  render() {
    return (
        <div className="pardon">
            <div id="pardon-items">
                {/* <img src={Cone} alt="cone" width="200px" /> */}
                <h1 style={pardonStyle}>Please pardon our dust... we will have this ready soon!</h1><p></p>
            </div>
      </div>
    )
  }
}

export default UnderConstruction
