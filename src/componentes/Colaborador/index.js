import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./Colaborador.css";

const Colaborador = ({
  id,
  nome,
  imagem,
  cargo,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
  favorito,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsfavorito = {
    size: 25,
    onClick: favoritar,
  };
  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4> <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <FaHeart {...propsfavorito} color="#ff0000" />
          ) : (
            <CiHeart {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
