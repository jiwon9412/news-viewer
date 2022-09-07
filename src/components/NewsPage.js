import React from 'react';
import { Outlet, useMatch } from '../../node_modules/react-router-dom/index';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
  const match = useMatch('/:category');
  const category = match?.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
