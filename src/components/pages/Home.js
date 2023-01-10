import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './Category';
import { fetchCategoriesApi } from '../../redux/categories/Categories';

function Home() {
  const categoriesData = useSelector((state) => state.categoriesReducer) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoriesData.length === 0) {
      dispatch(fetchCategoriesApi());
    }
  }, [dispatch]);

  return (
    <main>
      <div className="categories-title">
        <h2>Choose your favorite category</h2>
        <h3>
          Categories
          {' '}
          (
          {categoriesData.length}
          )
        </h3>
      </div>
      <div className="grid">
        {
      categoriesData.map((category) => (
        <Category key={category.id} category={category} />
      ))
        }
      </div>
    </main>
  );
}

export default Home;
