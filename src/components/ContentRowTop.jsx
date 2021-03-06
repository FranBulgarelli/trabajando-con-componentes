import ContentRowMovies from './ContentRowMovies'
import LastMovieInDB from './LastMovieInDB'
import GenresInDB from './GenresInDB'

export default function ContentRowTop({genres}) {

	const info = [
		{
			titulo: "Movies in Data Base",
			color: "primary",
			cifra: 21,
			icono: "fas fa-film fa-2x text-gray-300"
		},
		{
			titulo: "Total awards",
			color: "success",
			cifra: 79,
			icono: "fas fa-award fa-2x text-gray-300"
		},
		{
			titulo: "Actors quantity",
			color: "warning",
			cifra: 49,
			icono: "fas fa-user fa-2x text-gray-300"
		}
	]

    return (
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<ContentRowMovies data={info} />
					
					<div className="row">
						
						<LastMovieInDB/>
						<GenresInDB genres={genres}/>

					</div>
				</div>
				
  )
}
