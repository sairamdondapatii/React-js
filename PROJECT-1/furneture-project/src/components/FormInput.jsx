import React from 'react'

const FormInput = ({label,type,name,defaultValue}) => {
  return (
    <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <input type={type} name={name} defaultValue={defaultValue} className="input input-bordered " />
    </label>
  )
}

export default FormInput