import { Routes, Route } from 'react-router-dom';
import { CoinList } from '../components/crypto/CoinList';
import { CoinDetail } from '../components/crypto/CoinDetail';

export const Crypto = () => {
  return (
    <Routes>
      <Route path="/" element={<CoinList />} />
      <Route path="/:id" element={<CoinDetail />} />
    </Routes>
  );
};