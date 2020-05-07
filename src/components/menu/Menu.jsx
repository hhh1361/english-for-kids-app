import React from 'react'
import { connect } from 'react-redux'
import './Menu.css'

function Menu(props) {
	const { menu } = props
	const { allOptions, currentOption } = menu
	console.log('props: ', props)
	const onChangeMenu = e => {
		console.log(e.target.textContent)
	}

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
							onClick={onChangeMenu}
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

export default connect(mapStateToProps)(Menu)
