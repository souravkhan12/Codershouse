import React from 'react'

const StepUsername = ({ onClick }) => {
    return (
        <>
            <div> Username</div>
            <button onClick={onClick}>Next</button>
        </>
    )
}

export default StepUsername