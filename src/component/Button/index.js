import React from 'react'

const Button = ({label, ...props}) => {
    return (
        <button className={`btn btn-` + props.bgcolor}>{label}</button>
    )
}

export default Button;