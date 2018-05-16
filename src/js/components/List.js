// src/js/components/List.js

import React from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: id => dispatch(removeArticle(id))
  };
};

const ConnectedList = ({ articles, removeArticle }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
       ({el.id}) {el.title} <a href="#" onClick={() => removeArticle(el.id) }>remove</a>
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;