import React from 'react';

import './collection-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...rest }) => (
			<CollectionPreview key={id} {...rest} />
		))}
	</div>
);

export default CollectionsOverview;
