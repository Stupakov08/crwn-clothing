import React from 'react'
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
mutation ADD_ITEM_TO_CART($item: Item!) {
    addItemToCart(item: $item) @client
}`;

const CollectionItemContainer = (props) => (
    <Mutation mutation={ADD_ITEM_TO_CART}>
        {
            addItemToCart => <CollectionItem addItem={item => addItemToCart({ variables: { item } })}  {...props} />
        }
    </Mutation>
);

export default CollectionItemContainer;