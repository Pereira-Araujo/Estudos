import React from "react";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import marcadorBranco from "../../img/bookmark_white.svg";
import marcadorPreto from "../../img/bookmark.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

import iconeCompartilhar from "../../img/share.svg";

import { CompartilharApp } from "../Compartilhar/Compartilhar.js";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

import {
  PostagemContainer,
  PostagemHeader,
  PostagemFoto,
  PostagemFooter,
  UsuarioFoto
} from "./PostEstilo";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhar: false,
  };

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
    } else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  //desafio2
  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar,
    });
  };
  //desafio2

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };
  //desafio1
  onClickMark = () => {
    this.setState({
      marcado: !this.state.marcado,
    });
  };
  //desafio1

  render() {
    // desafio1
    let marcador;

    if (this.state.marcado) {
      marcador = marcadorPreto;
    } else {
      marcador = marcadorBranco;
    }
    // desafio1

    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let compartilhar;

    if (this.state.compartilhar) {
      compartilhar = <CompartilharApp />;
    }

    return (
      <PostagemContainer>
        <PostagemHeader>
          <UsuarioFoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>

          <IconeComContador icone={marcador} onClickIcone={this.onClickMark} />
        </PostagemHeader>

        <PostagemFoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostagemFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeComContador
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />
        </PostagemFooter>

        {componenteComentario}

        {compartilhar}
      </PostagemContainer>
    );
  }
}

export default Post;
