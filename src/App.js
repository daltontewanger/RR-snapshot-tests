import './App.css';
import { useState, useEffect } from "react";
import GitHubCard from "./Components/GitHubCard";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/daltontewanger`);
      const data = await response.json();
      setUserData(data);
    };

    fetchData()
  }, []);

  const display = userData && <GitHubCard userData={userData} />;
  return (
    <div className="App">
      <h1>Github</h1>
      {display}
    </div>
  );
}

export default App;
