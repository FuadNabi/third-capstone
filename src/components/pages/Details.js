import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFoodApi } from '../../redux/details/Details';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const foodsData = useSelector((state) => state.foodReducer[location.state]) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (foodsData.length === 0) {
      dispatch(fetchFoodApi(location.state));
    }
  }, [dispatch]);

  return (
    <div className="detail-container">
      <h2>{foodsData.length}</h2>
      <button type="button" onClick={() => navigate(-1)}>Back</button>
      {
        foodsData.map((food) => (
          <div key={food.id}>
            <h5>{food.id}</h5>
            <img alt="Food" src={food.image} className="detail-img" />
            <h3>{food.name}</h3>
          </div>
        ))
      }
    </div>
  );
};

export default Details;
