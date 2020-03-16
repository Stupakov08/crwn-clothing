import React from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
query getCollectionsByTItle($title: String!) {
    getCollectionsByTitle(title: $title) {
        id 
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}

`

const CollectionPageContainer = ({ match }) => {
    return (
        <Query
            query={GET_COLLECTION_BY_TITLE}
            variables={{ title: match.params.collectionId }}
        >
            {
                ({ loading, data }) => {
                    if (loading) return <Spinner />;
                    var collections = data && data.getCollectionsByTitle;
                    return <CollectionPage collection={collections} />
                }
            }
        </Query >
    )
}

export default CollectionPageContainer;