import React from 'react'
import Loader from 'react-loader-spinner'
import './CHBLoader.scss'
const LOADER_ID = 'phoenix-loader'

export const CHBLoader = () => {
	return (
		<div id={LOADER_ID}>
			<Loader type='BallTriangle' color='#00BFFF' height={100} width={100} />
		</div>
	)
}

CHBLoader.show = (): void => {
	const loader = document.getElementById(LOADER_ID)
	// const app = document.getElementsByClassName('App')[0];
	// (app as any).style.overflow = 'hidden'
	loader!.style.display = 'flex'
}

CHBLoader.hide = (): void => {
	const loader = document.getElementById(LOADER_ID)
	// const app = document.getElementsByClassName('App')[0];
	// (app as any).style = ''
	loader!.style.display = 'none'
}