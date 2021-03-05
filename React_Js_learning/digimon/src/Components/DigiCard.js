import React from "react";
import axios from "axios";

class DigiCard extends React.Component {
  state = {
    digimon: []
  };

  componentDidMount() {
    this.pegaDigimon(this.props.digimon);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.digimon !== this.props.digimon) {
      this.pegaDigimon(this.props.digimon);
    }
  }

  pegaDigimon = name => {
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
      .then((response) => {
        this.setState({ digimon: response.data[0] });
        console.log(this.state.digimon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const digimon = this.state.digimon;

    return (
      <div>
        {console.log(digimon)}
        <p>Nome:{digimon.name}</p>
        <p>Level:{digimon.level}</p>
        <img src={digimon.img} alt={digimon.name} />
      </div>
    );
  }
}

export default DigiCard;
