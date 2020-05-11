import React from 'react'
import { connect } from 'react-redux'
import './Menu.css'

function Menu(props) {
	const { menu, mode, onChangeOption } = props
	const { allOptions } = menu

	const menuClassname = mode === 'Play' ? 'btn-menu play' : 'btn-menu training'

	const openNav = e => {
		e.target.parentNode.children[0].classList.add('active')
	}

	const closeNav = e => {
		e.target.parentNode.className === 'overlay-content'
			? e.target.parentNode.parentNode.classList.remove('active')
			: e.target.parentNode.classList.remove('active')
	}

	return (
		<div className="menu">
			<div id="myNav" className="overlay">
				<a href="#" className="closebtn" onClick={closeNav}>
					&times;
				</a>
				<div className="overlay-content">
					{allOptions.map(e => (
						<a
							href="#"
							key={e}
							onClick={el => {
								closeNav(el)
								onChangeOption(el.target.textContent)
							}}
						>
							{e}
						</a>
					))}
				</div>
			</div>
			<div className={menuClassname} onClick={openNav}>
				<span className="menuButton">Menu</span>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
		mode: state.mode,
	}
}

const mapsDispatchToProps = dispatch => ({
	onChangeOption: option => {
		dispatch({
			type: 'CHANGE_MENU_OPTION',
			payload: option,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Menu)
