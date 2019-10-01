import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...rest }) => (
			<CollectionPreview key={id} {...rest} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
