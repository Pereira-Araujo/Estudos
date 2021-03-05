import React, { Component } from "react";
import styled from "styled-components";
import Labedin from "./img/labedin.png";
import Luna from "./img/luna.png";
import Other from "./img/otherside.png";
import Upfour from "./img/upfour.png";
import Back from './img/back.svg'
import Next from './img/next.svg'


const Container = styled.main`
width:100vw;
height:80vh;
display:flex;
justify-content:center;
align-items:center;

`


const Galeria = styled.section`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
height:60vh;
width:50vw;


`

const Imagens = styled.img`
  width: 520px;
`;
const BotaoE = styled.span`
display:flex;
align-items:center;
justify-content:center;

width:2rem;
height:2rem;


`

const BotaoR = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:2rem;
height:2rem;

`
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: Labedin,
      link: "https://zealous-head.surge.sh/"
    };
  }

  esquerda = () => {
    let state = this.state;

    switch (state.imagem) {
      case Labedin:
        state.imagem = Upfour;
        state.link = "https://upfour.araujocoding.repl.co/";
        break;
      case Upfour:
        state.imagem = Other;
        state.link = "https://othersidestore.araujocoding.repl.co/";
        break;
      case Other:
        state.imagem = Luna;
        state.link = "https://lunasocialmedia.araujocoding.repl.co/";
        break;
      default:
        state.imagem = Labedin;
        state.link = "https://zealous-head.surge.sh/";
    }

    this.setState(state);
  };

  direita = () => {
    let state = this.state;
    switch (state.imagem) {
      case Labedin:
        state.imagem = Luna;
        state.link = "https://lunasocialmedia.araujocoding.repl.co/";
        break;
      case Luna:
        state.imagem = Other;
        state.link = "https://othersidestore.araujocoding.repl.co/";
        break;
      case Other:
        state.imagem = Upfour;
        state.link = "https://upfour.araujocoding.repl.co/";
        break;
      default:
        state.imagem = Labedin;
        state.link = "https://zealous-head.surge.sh/";
    }
    this.setState(state);
  };

  render() {
    return (
      <Container>
        <Galeria>
        <BotaoE onClick={this.esquerda}>
          <img src={Back} alt={'back'}/>
        </BotaoE>
        <a href={this.state.link} target="_blank">
          <Imagens src={this.state.imagem} alt="upfour" />
        </a>
        <BotaoR onClick={this.direita}>
        <img src={Next} alt={'next'}/>

        </BotaoR>
        </Galeria>
       </Container> 
      
    );
  }
}

export default Gallery;
