import React from 'react'
import { connect } from 'react-redux'
import Table from './components/table/Table'
import Menu from './components/menu/Menu'
import './App.css'

function App(props) {
	return (
		<>
			<Table />
			<Menu />
		</>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}

export default connect(mapStateToProps)(App)
