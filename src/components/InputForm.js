import React from 'react'

const InputForm = ({ onSubmit, onChange }) => {
    return (
        <div className="inputContainer">
            <form className='inputForm' onSubmit={onSubmit}>
                <label className='inputLabel'>City</label>
                <input className='inputBox' type='text' name='city' onChange={onChange} />
                <label className='inputLabel'>Country</label>
                <input className='inputBox' type='text' name='country' onChange={onChange} />
                <button className='inputButton' >Submit</button>
            </form>

        </div>
    )
}

export default InputForm;