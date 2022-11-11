import React from 'react'
export default function Tarea( {tareaIndividual, accionarTarea} ) {
  function handleTarea() {
    accionarTarea(tareaIndividual.id)
  }

  function handleEdit () {
    console.log('Editando');
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={tareaIndividual.isComplete} onChange={handleTarea} />
        {tareaIndividual.name}
        <button onClick={handleEdit}>Editar</button>
      </label>
    </div>
  )
}