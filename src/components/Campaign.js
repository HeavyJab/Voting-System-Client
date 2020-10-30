import React from 'react'
import Options from './Options'

const Campaign = props => {
    const {campaigns} = props;

    if (!campaigns || campaigns.length === 0) {
        return <p>No campaigns!</p>;
    }

    return (
        <ul>
        <h1>Campaigns</h1>
        {campaigns.map((campaign) =>{
            return (
                <li key={campaign.id}>
                    <span>{campaign.name} </span>
                    <span>{campaign.desc}</span>
                    <Options options={campaign.options}></Options>
                </li>
            )
        })}
        </ul>
    )
}

export default Campaign;