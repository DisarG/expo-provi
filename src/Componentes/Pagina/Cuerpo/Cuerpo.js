import React from "react";
import Lista from "./ListaCanciones/ListaCanciones";

function Cuerpo(props) {
    return (
        
            
            <main id="TuPlayList">
                <h2 id="h2">{props.tarjeta.titulo}</h2>
                <div id="Menu">
                    <p id="categorias">{props.menu.Descripcion}</p>
                </div>
                <div id="ListaDeCanciones">
                    <Lista />
                </div>
            </main>
          
    )
    
}

export default Cuerpo;