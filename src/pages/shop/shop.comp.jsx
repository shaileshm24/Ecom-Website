import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.comp";
import { Route } from "react-router-dom";
import CategoryPage from '../../pages/category/category.comp';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);
export default ShopPage;
