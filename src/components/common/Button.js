import React from 'react'
import Spinner from './Spinner'

const Button = ({
    buttonType,
    buttonText,
    btnIcon,
    disabled,
    onClick,
    onSubmit,
    processing
}) => {

    return (
        <button type={buttonType || "submit"}
            className="btn btn-primary px-4"
            disabled={disabled}
            onClick={onClick}
            onSubmit={onSubmit}
        >
            {
                !processing ?
                    <span>
                        {buttonText ? buttonText : 'Submit'}
                        {btnIcon ? <i className={`pl-2 fas fa-${btnIcon}`}></i> : null}
                    </span>
                    : <Spinner spinnerStyle="text-light" />
            }

        </button>
    )
}


export default Button