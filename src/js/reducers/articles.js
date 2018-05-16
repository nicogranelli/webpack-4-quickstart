import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

export default (articles = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...articles, action.article];
    case REMOVE_ARTICLE:
      return articles.filter(article => article.id != action.id);
    default:
      return articles;
  }
};