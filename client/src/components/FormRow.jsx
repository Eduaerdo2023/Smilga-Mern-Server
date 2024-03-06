const FormRow = ({ type, id, name, labelText,  defaultValue }) => {
  return (<div className="form-row">
    <label htmlFor={name} className='form-label'>
    { labelText || name}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="form-input"
      defaultValue={defaultValue || ''}
      required
    />
  </div>
  )
}

export default FormRow
