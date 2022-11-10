import React from 'react'
export default function Tarea( {tareaIndividual, accionarTarea} ) {
  function handleTarea() {
    accionarTarea(tareaIndividual.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={tareaIndividual.isComplete} onChange={handleTarea} />
        {tareaIndividual.name}
        <button>Editar</button>
      </label>
    </div>
  )
}