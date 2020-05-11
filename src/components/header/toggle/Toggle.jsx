/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { connect } from 'react-redux'
import './Toggle.css'

function Toggle(props) {
	const { onToggle, mode } = props

	return (
		<div className="toggle">
			<label className="switch">
				<input type="checkbox" onClick={onToggle} />
				<span className="slider round">{mode}</span>
			</label>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		mode: state.mode,
	}
}

const mapsDispatchToProps = dispatch => ({
	onToggle: element => {
		const result = element.target.checked ? 'Play' : 'Training'
		dispatch({
			type: 'CHANGE_MODE',
			payload: result,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Toggle)
