import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../store/productsSlice';
import { RootState } from '../store/store';

const SortDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.products.sortBy);

  return (
    <select
      value={sortBy}
      onChange={(e) => dispatch(setSortBy(e.target.value as any))}
      className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="none">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Highest Rated</option>
    </select>
  );
};

export default SortDropdown;