import "./App.css";
import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import ProjectList from "./components/ProjectList/ProjectList";
import allProjectNames from "./components/Data/ProjectList.json";

function App() {
  const [value, setValue] = useState("");

  const normalizedValue = value.toLowerCase();

  const foundProjectNames = allProjectNames.filter((project) =>
    project.name.toLowerCase().includes(normalizedValue)
  );

  return (
    <div className="App">
      <SearchInput value={value} setValue={setValue} />
      <ProjectList projectNames={foundProjectNames} />
    </div>
  );
}

export default App;
