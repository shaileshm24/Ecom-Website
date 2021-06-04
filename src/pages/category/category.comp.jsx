import React from 'react';

import './category.scss';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.comp';
import { selectCategory } from '../../redux/shop/shop.selectors'

const CategoryPage = ({collections}) => {
    console.log(collections);
    const {title, items}=collections;
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item=>(
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>)
};

const mapStateToProps = (state, ownProps) =>({
collections: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);