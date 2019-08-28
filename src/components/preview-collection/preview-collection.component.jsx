import React from 'react';
import './preview-collection.styles.scss';
import CollectionItems from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((item, indx) => indx < 4)
				.map(item => (
					<CollectionItems key={item.id} {...item}></CollectionItems>
				))}
		</div>
	</div>
);

export default CollectionPreview;
