import { Routes, Route } from 'react-router-dom';
import { NewsList } from '../components/news/NewsList';

export const News = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsList />} />
    </Routes>
  );
};