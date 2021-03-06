import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import Table from "./Table"

export default function ContentWrapper() {

  const genres = ["Musical", "Infantiles", "Fantasia", "Drama", "Documental", "Comedia", "Ciencia Ficción", "Aventura", "Animación", "Acción"]

  return (
    <div>
      <TopBar />
      <ContentRowTop genres={genres} />
      <Table/>
      <Footer />
    </div>
  )
}
