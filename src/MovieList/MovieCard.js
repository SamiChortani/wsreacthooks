import React from 'react'

const MovieCard = ({el})=> {
  return (
    <div>
        
        <div className="hero-container">
		<div className="main-container">
			<div className="poster-container">
				<a href="/#"><img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg" className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">Blade Runner 2049</h4>
					<p className="ticket__movie-slogan">
						More human than human is our motto.
					</p>
					<p className="ticket__current-price">$28.00</p>
					<p className="ticket__old-price">$44.99</p>
					<button className="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
        </div>

		

    </div>
  )
}

export default MovieCard