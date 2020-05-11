import React from 'react'
import { connect } from 'react-redux'
import Table from './components/table/Table'
import Header from './components/header/Header'
import './App.css'

function App(props) {
	return (
		<>
			<Header />
			<Table />
		</>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}

export default connect(mapStateToProps)(App)
