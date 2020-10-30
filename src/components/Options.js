import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import axios from 'axios';

const VoteButton = styled.button`
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin-top: 5px;
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    opacity: 0.6;
  }
  width: auto;
`;

const Votes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Options = props => {
    const {options, campaignId} = props;

    const handleVote = async(e) => {
        try{
            const apiUrl = `https://cors-anywhere.herokuapp.com/https://us-central1-voting-system-ae0c0.cloudfunctions.net/app/api/${campaignId}/vote`
            const hkid = prompt("Hong Kong ID Number: ")
            const campaigns = await axios.post(apiUrl, {"name": e.target.innerText, "hkId": hkid});     
            alert(campaigns.data)
        } catch (err) {
            alert(err.response.data)
        }
    }

    return (
        <>
        {options.map((option) =>{
            return (
                <Votes>
                    <VoteButton onClick={(e) => handleVote(e)}>{option.name}</VoteButton>
                    <span>Votes: {option.voteCount}</span>
                </Votes>
            )
        })}
        </>
    )
}

export default Options;