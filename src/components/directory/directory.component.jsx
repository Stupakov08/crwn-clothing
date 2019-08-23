import React, { Component } from 'react';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './direcory.styles.scss';

class Directory extends Component {
	constructor() {
		super();

		this.state = {
			sections: sections
		};
	}
	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ title, id, imageUrl, size }) => (
					<MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}
export default Directory;
