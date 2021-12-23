import React from "react";
import axios from "axios";
import DigiCard from "./Components/DigiCard";

import "./styles.css";

class App extends React.Component {
  state = {
    digimonsLista: [],
    digiName: ""
  };

  componentDidMount = () => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        this.setState({ digimonsLista: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeDigiName = (event) => {
    this.setState({ digiName: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <select onChange={this.changeDigiName}>
          <option value={""}>Nenhum</option>
          {this.state.digimonsLista.map((digimon) => {
            return (
              <option key={digimon.name} value={digimon.name}>
                {digimon.name}
              </option>
            );
          })}
        </select>
        {this.state.digiName && <DigiCard digimon={this.state.digiName} />}
      </div>
    );
  }
}
export default App;
