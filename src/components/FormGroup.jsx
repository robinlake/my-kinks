import React from 'react'

function FormGroup(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <table >
                <thead className="tbl-header">
                    <th>{props.column1}</th>
                    {props.column2 ? <th>{props.column1}</th> : undefined}
                </thead>
                <tbody className="tbl-content">
                    {props.children}
                </tbody>
            </table>
            {/* <h3>{props.title}</h3> */}
        </div>
    )
}

export default FormGroup
