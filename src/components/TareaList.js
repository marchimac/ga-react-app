import React from 'react'
import Tarea from './Tarea'

export default function TareaList({ tareas, accionarTarea }) {
  return (
    tareas.map( tareaIndividual => {
      return <Tarea key={tareaIndividual.id} accionarTarea={accionarTarea} tareaIndividual={tareaIndividual} />
    } )
  )
}

