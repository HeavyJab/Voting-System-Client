import { useState, useEffect } from "react";
import axios from "axios";
import Campaign from "./components/Campaign";
import withLoading from "./components/withLoading";

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
  <>
   <h1>Voting System</h1>
   <CampaignLoading isLoading={appState.loading} campaigns={appState.campaigns} ></CampaignLoading>
   </>
  );
}

export default App;
