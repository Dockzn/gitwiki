import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Repos from "./components/Repos";
import Button from "./components/Button";
import { api } from "./services/api";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        return;
      }
    } else {
      window.alert("Repositório não encontrado");
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <Input
          value={currentRepo}
          onChange={(event) => setCurrentRepo(event.target.value)}
        />
        <Button onClick={handleSearchRepo} />
        {repos.map((repo) => (
          <Repos repo={repo} />
        ))}
      </div>
    </>
  );
}

export default App;
