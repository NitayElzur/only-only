import './Input.css'
function Input({ name, minLength, maxLength, register, errors, pat, patMsg, type }) {
    return (
        <div>
            {errors[name] && <div className='errorText'>{errors[name]?.message}</div>}
            <input id={`${name.toLowerCase()}Input`} className='formInput' type={`${type}`} placeholder={`${name}`} {
                ...register(`${name}`, {
                    required: `${name} is required`,
                    minLength: {
                        value: minLength,
                        message: `${name} must be over ${minLength} characters`
                    },
                    maxLength: {
                        value: maxLength,
                        message: `${name} must be under ${maxLength} characters`
                    },
                    pattern: {
                        value: pat,
                        message: patMsg
                    }
                })
            } />
        </div>
    )
}
export default Input;