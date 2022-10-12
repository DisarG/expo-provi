import "./Pagina.css";

import Encabezado2 from "../Componentes/Pagina/Encabezado/EncabezadoPlayList";
import Cuerpo from "../Componentes/Pagina/Cuerpo/Cuerpo";

const menu1 = {
    Descripcion: 'Ordene las piezas del curiculum vitae en el orden corecto',  
  }

  const tarjeta1 = {
    titulo: 'Curiculm Vitae',  
  }

  

function PlayList(props) {
    return (
        <div id="pagina">
            <Encabezado2 />
            <Cuerpo tarjeta={tarjeta1} menu={menu1}/>
        </div>
    )
    
}

export default PlayList;
