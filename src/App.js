import { useState, useEffect } from "react";
import axios from "axios";
import Campaign from "./components/Campaign";
import withLoading from "./components/withLoading";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`

const App = () => {
  const CampaignLoading = withLoading(Campaign)
  const [appState, setAppState] = useState({loading: false, campaigns: null})

  useEffect(() => {
      setAppState({loading: true});
      (async () => {
          const apiUrl = 'https://cors-anywhere.herokuapp.com/https://us-central1-voting-system-ae0c0.cloudfunctions.net/app/api/campaigns'
          const campaigns = await axios.get(apiUrl);
          setAppState({ loading: false, campaigns: campaigns.data });
      })()
  }, [setAppState])

  return (
  <Layout>
    <h1>Voting System</h1>
    <CampaignLoading isLoading={appState.loading} campaigns={appState.campaigns} ></CampaignLoading>
   </Layout>
  );
}

export default App;
