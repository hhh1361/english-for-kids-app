import React from 'react'
import { connect } from 'react-redux'
import './Menu.css'

function Menu(props) {
	const { menu, onChangeOption } = props
	const { allOptions } = menu

	return (
		<div className="row">
			<div className="col-4">
				<div className="list-group" id="list-tab" role="tablist">
					{allOptions.map(e => (
						<a
							className="list-group-item list-group-item-action"
							id="list-home-list"
							data-toggle="list"
							href="#list-home"
							role="tab"
							aria-controls="home"
							key={e}
							onClick={el => {
								onChangeOption(el.target.textContent)
							}}
						>
							{e}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
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
