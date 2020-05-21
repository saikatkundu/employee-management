import React from 'react'

const Spinner = (spinnerStyle = "text-primary") => {

    return (
        <div className={`spinner-border ${spinnerStyle}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner