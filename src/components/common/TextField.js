import React from 'react'

const TextField = ({
    required,
    inputId,
    labelText,
    fieldErrMsg,
    smallBox,
    largeBox,
    fullRow,
    noBorderRad,
    input,
    meta: { touched, invalid, error },
    ...custom

}) => {
    let optClass = '',
        brdCls = ''
    if (smallBox) optClass = "form-control-sm"
    else if (largeBox) optClass = "form-control-lg"
    if (noBorderRad) brdCls = "rounded-0"
    return (
        <div className={` ${fullRow ? 'col-sm-12' : 'col-sm-12 col-md-12 col-lg-6'}`}>
            <div className="form-group row">
                <label
                    id={`${inputId}Lbl`}
                    htmlFor={inputId || 'textInput'}
                    className="col-sm-4 col-form-label font-weight-bold  text-capitalize"
                >
                    {labelText}:
                {required ? <i className="fas fa-star text-danger pl-1" style={{ fontSize: 10 }}></i> : ''}
                </label>
                <div className="col-sm-8">
                    <div className="input-group mb-2 mr-sm-2">
                        <input
                            className={`form-control ${brdCls} ${optClass} ${touched && error ? 'is-invalid' : ''}`}
                            id={inputId || 'textInput'}
                            {...input}
                            {...custom}
                        ></input>
                    </div>
                    {touched && error ? <small className="text-danger">{error}</small> : null}

                </div>

            </div>

        </div>
    )
}


export default TextField