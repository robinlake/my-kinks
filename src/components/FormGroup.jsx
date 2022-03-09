import React from 'react'

function FormGroup(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <table>
                <thead>
                    <th>{props.column1}</th>
                    {props.column2 ? <th>{props.column1}</th> : undefined}
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
            {/* <h3>{props.title}</h3> */}
        </div>
    )
}

export default FormGroup
