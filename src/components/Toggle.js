import React, { useState } from 'react'

function Toggle({handleToggle,toggleState}) {
   
    return (
        <div className="header">
            <h1 className={toggleState ? "darkModeHeader":null}>Notes</h1>
            <button className="btn" onClick={handleToggle}>Toggle Mode</button>
        </div>
    )
}

export default Toggle
