import React from 'react'

const InputBox = (props) => {
    return (
        <input
            name={props.name}
            type={props.type || 'text'}
            placeholder={props.placeholder}
            className="w-full px-12 py-2 border rounded-lg"
            onChange={props.handleChange}
        />
    )
}

export default InputBox