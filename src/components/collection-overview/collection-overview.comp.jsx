import React from "react";

import PreviewCollection from "../../components/preview-collection/preview-collection.com";

import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => {
  console.log(collections);
     return (
     <div className="shop-page">
       {collections.map(({id, ...otherCollectionProps}) => (
           <PreviewCollection key={id} {...otherCollectionProps}/>
       ))} 
      </div>
    )
       };

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);
