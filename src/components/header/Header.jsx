import React from 'react'
import { connect } from 'react-redux'
import Menu from './menu/Menu'
import Toggle from './toggle/Toggle'
import './Header.css'

function Header(props) {
	const { mode } = props
	return (
		<ul className="nav nav-pills nav-justified">
			<li className="nav-item">
				<Menu />
			</li>
			<li className="nav-item">
				{mode === 'Play' ? (
					<button className="btn-start" type="button">
						Start game!
					</button>
				) : null}
			</li>

			<li className="nav-item">
				<Toggle />
			</li>
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		mode: state.mode,
	}
}

export default connect(mapStateToProps)(Header)
