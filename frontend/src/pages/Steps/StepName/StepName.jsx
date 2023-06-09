import React from 'react'

const StepName = ({ onClick }) => {
    return (
        <>
            <div>Name</div>
            <button onClick={onClick}>Next</button>
        </>
    )
}

export default StepName