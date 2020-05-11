import React from 'react'
import { connect } from 'react-redux'
import './Card.css'

function Card(props) {
	const { word, translation, image, sound, mode } = props

	const onMouseLeaveHandler = element => {
		setTimeout(() => {
			element.target.classList.remove('translate')
		}, 200)
		element.target.removeEventListener('mouseleave', onMouseLeaveHandler)
	}

	return (
		<div
			className="element-container"
			onClick={e => {
				if (e.target.className === 'rotate') {
					e.target.parentNode.classList.add('translate')
					e.target.parentNode.addEventListener(
						'mouseleave',
						onMouseLeaveHandler,
					)
				} else {
					const audio = new Audio()
					audio.src = sound
					audio.play()
				}
			}}
		>
			<div className="element">
				<div
					className="front"
					style={{
						backgroundImage: `url(${image})`,
					}}
				>
					{mode === 'Training' ? (
						<div className="card-title">{word}</div>
					) : null}
				</div>
				<div
					className="back"
					style={{
						backgroundImage: `url(${image})`,
					}}
				>
					<div className="card-title">{translation}</div>
				</div>
				{mode === 'Training' ? <div className="rotate" /> : null}
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

export default connect(mapStateToProps)(Card)
