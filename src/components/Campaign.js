import React from 'react'
import Options from './Options'
import styled from 'styled-components';
import dayjs from 'dayjs'
const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)


const Card = styled.div`
    min-width: 80%;
    margin-bottom: 30px;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
        margin-bottom: 5px;
    }
    p{
        margin-top: 5px;
        margin-bottom: 15px;
    }
    strong {
        margin-bottom: 5px;
    }
    margin-bottom: 10px;
`

const Duration = styled.div`
    display: flex;
    justify-content: space-between;
`

const Campaign = props => {
    const {campaigns} = props;

    if (!campaigns || campaigns.length === 0) {
        return <p>No campaigns!</p>;
    }

    return (
        <>
        <h1>Campaigns</h1>
        {campaigns.map((campaign) =>{
            return (
                <Card>
                    <Header>
                        <h2>{`
                        ${dayjs().isBetween(campaign.startDate, campaign.endDate)? '[Active]': '[Ended]'} 
                        ${campaign.name}
                        `}</h2>
                        <p>{campaign.desc}</p>
                        <strong>{`Start: ${dayjs(campaign.startDate).format('h:mma DD MMM,YYYY')}`}</strong>
                        <strong>{`End: ${dayjs(campaign.endDate).format('h:mma DD MMM,YYYY')}`}</strong>
                    </Header>

                    <Duration>
          
                    </Duration>
                    
                    <Options options={campaign.options} campaignId={campaign.id}></Options>
                </Card>
            )
        })}
        </>
    )
}

export default Campaign;