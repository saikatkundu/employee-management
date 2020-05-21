import React from 'react'

const EmployeeProfile = ({
    employee
}) => {
    if (employee && employee.length > 0) {
        return employee.map(emp => {
            const { id, name, age, gender, email, phoneNo } = emp
            return (
                <div key={id} className="card m-3 col-sm-5">
                    <div className="row no-gutters">
                        <div className="col-md-4 my-auto text-center">
                            <i className="fas fa-user-circle fa-5x text-info"></i>
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">
                                    <i className="fas fa-mars"></i> <span className="pl-1">{gender}</span>
                                </p>
                                <p className="card-text">
                                    <i className="far fa-calendar"></i> <span className="pl-1">{age}</span>
                                </p>
                                <p className="card-text">
                                    <i className="far fa-envelope-square"></i> <span className="pl-1">{email}</span>
                                </p>
                                <p className="card-text">
                                    <i className="far fa-phone"></i> <span className="pl-1">{phoneNo}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return <span className="text-warning">No Employee Record Found</span>
}


export default EmployeeProfile