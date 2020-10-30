import React from 'react'

const Options = props => {
    const {options} = props;
    return (
        <ul>
        {options.map((option) =>{
            return (
                <li>
                    <span>{option.name} </span>
                    <span>{option.voteCount}</span>
                </li>
            )
        })}
        </ul>
    )
}

export default Options;