import React from 'react'
import '../styles/quote.css';

const quoteStyle = {
    color: "#ffffff",
    fontSize: "14pt",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "60px",
    marginBottom: "30px",
    marginLeft: "10vw",
    marginRight: "10vw",
    fontStyle: "italic",
}

const Quote = ({quote}) => { 
    console.log('quote', {quote})

    return (
    <div style={quoteStyle}>
        <p className="quote" dangerouslySetInnerHTML={{__html: quote}}> --</p>
    </div>
  )
}

export default Quote
