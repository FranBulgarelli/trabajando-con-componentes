import "./Table.css"
import Row from "./Row"

export default function Table() {

    const fila = [
        {
            titulo: "Billy Elliot",
            duracion: 123,
            rating: 5,
            genero: ["Drama", "Comedia"],
            premios: 2
        },
        {
            titulo: "Alicia en el pais de las maravillas",
            duracion: 142,
            rating: 4.8,
            genero: ["Drama", "Accion", "Comedia"],
            premios: 3
        },

    ]

    return (
        <div className="divTable">
        <table className="table">
          <thead>
          <tr>
              <th>Título</th>
              <th>Duración</th>
              <th>Rating</th>
              <th>Género</th>
              <th>Premios</th>
          </tr>
          </thead>
          <tbody>
              <Row filas={fila} />
          </tbody>
          <tr>
              <th>Título</th>
              <th>Duración</th>
              <th>Rating</th>
              <th>Género</th>
              <th>Premios</th>
          </tr>
        </table>
        </div>
  )
}
