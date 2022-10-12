import React, { useState } from "react";


const Lista = () => {
  const [list, setList] = useState([
    { id: 1, imagen: 'Foto5.png', CantVotos: 0, MeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg', NoMeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg' },
    { id: 2, imagen: 'foto4.png', CantVotos: 0, MeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg', NoMeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg' },
    { id: 3, imagen: 'foto3.png', CantVotos: 0, MeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg', NoMeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg' },
    { id: 4, imagen: 'fotoNombre.png', CantVotos: 0, MeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg', NoMeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg' },
    { id: 5, imagen: 'foto2.png', CantVotos: 0, MeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg', NoMeGusta: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg' }
  ])
  const ActualizarCantVotos = (param) => {
    const CompararId = list.map(listas => (
      listas.id === param.id
        ? param
        : listas
    ))
    setList(CompararId)

  }


  const sortedList = [...list].sort((a, b) => (a.CantVotos < b.CantVotos ? 1 : a.CantVotos > b.CantVotos ? -1 : 0))

  return (

    <ul>
      {sortedList.map(listas => (
        <li>
          <div id="ContenedorInfo2"><img id="medidas" src={listas.imagen} alt="foto" /> </div>
          <div id="ContenedorInfo">
            <button onClick={() => ActualizarCantVotos({
              id: listas.id, imagen: listas.imagen,
              CantVotos: listas.CantVotos + 1, MeGusta: listas.MeGusta, NoMeGusta: listas.NoMeGusta,
            })} className="Votar"><img id="chica1" src={listas.MeGusta} alt="foto" /></button>
            <button onClick={() => ActualizarCantVotos({
              id: listas.id, imagen: listas.imagen,
              CantVotos: listas.CantVotos - 1, MeGusta: listas.MeGusta, NoMeGusta: listas.NoMeGusta,
            })} className="Votar"><img id="chica2" src={listas.NoMeGusta} alt="foto" /></button>
          </div>
        </li>
      ))}
    </ul>
  )

}

export default Lista;