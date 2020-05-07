import React from 'react'
import { connect } from 'react-redux'
import './Card.css'

function Card(props) {
	const { word, translation, image, audio } = props
	console.log(image)
	console.log('../../../assets/img/Adjective/big.jpg')
	// const background = require(image)
	return (
		<div>
			<div
				className="card"
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<div />
				{word}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}

export default connect(mapStateToProps)(Card)
