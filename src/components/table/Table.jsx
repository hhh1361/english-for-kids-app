import React from 'react'
import { connect } from 'react-redux'
import words from '../../constants/Words'
import Card from './card/Card'

function Table(props) {
	const { menu } = props
	console.log(menu.currentOption)
	return (
		<div className="container">
			<div className="row">
				{menu.currentOption
					? words[menu.currentOption].map(e => (
							<Card
								word={e.word}
								translation={e.translation}
								image={e.image}
								audio={e.audio}
								key={e.word}
							/>
					  ))
					: null}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}

export default connect(mapStateToProps)(Table)
