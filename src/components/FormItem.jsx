import React from 'react'
import InputBox from './InputBox'

const FormItem = ({ Icon, name, handleChange, type, placeholder, error }) => {
    return (
        <div className="relative">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
            <InputBox name={name} handleChange={handleChange} type={type} placeholder={placeholder} />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}

export default FormItem