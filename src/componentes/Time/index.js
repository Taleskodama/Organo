import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({
  id,
  nome,
  cor,
  corSecundaria,
  colaboradores,
  aoDeletar,
  mudarCor,
}) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(cor, 0.6),
      }}
    >
      <input
        value={cor}
        onChange={(evento) => mudarCor(evento.target.value, id)}
        type="color"
        className="input-color"
      />
      <h3 style={{ borderColor: cor }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              corDeFundo={cor}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
