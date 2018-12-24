import React from 'react'
import '../styles/loader.css'

// from https://bootsnipp.com/snippets/featured/creative-animated-loading

function Loader() {
    return (
        <div className="row">
            <div id="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="loading"></div>
            </div>
        </div>
    )
}

export default Loader