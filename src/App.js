import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data-Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Dev-ops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Ux e Design",
      cor: "#db6ebf",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#ffba05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#ff8a29",
    },
  ]);
  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador() {
    console.log("deletando colaborador");
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          id={time.id}
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
