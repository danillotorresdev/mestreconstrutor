import React from 'react'
import './conhecaItem.scss'
import ContentText from './ContentText'
import CircularIcon from './CircularIcon'

const conhecaItem = (props) => {
	return (
		<div className="conhecaItem">
			<CircularIcon image={props.image}/>
			<ContentText 
				title={props.title}
				text={props.text}
			/>
		</div>
	)
}

export default conhecaItem