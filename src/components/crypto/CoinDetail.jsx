import { useParams } from 'react-router-dom';
import { cryptoData } from '../../data/coins';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Button } from '../common/Button';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CoinDetail = () => {
  const { id } = useParams();
  const coin = cryptoData.find(c => c.id === parseInt(id));

  if (!coin) {
    return <div className="text-center py-12">Cryptomonnaie non trouvée</div>;
  }

  const priceHistory = {
    labels: ['1h', '24h', '7j', '30j', '90j', '1a'],
    datasets: [
      {
        label: 'Prix en USD',
        data: [
          coin.price * 0.998,
          coin.price * 0.99,
          coin.price * 1.02,
          coin.price * 0.97,
          coin.price * 0.95,
          coin.price * 1.1
        ],
        borderColor: coin.change24h >= 0 ? '#10b981' : '#ef4444',
        backgroundColor: coin.change24h >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={coin.image} alt={coin.name} className="w-12 h-12 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">{coin.name} <span className="text-gray-500 dark:text-gray-400 text-xl">({coin.symbol})</span></h1>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-3">${coin.price.toLocaleString()}</span>
              <span className={`px-2 py-1 rounded text-sm ${coin.change24h >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="primary">Acheter</Button>
          <Button variant="outline">Vendre</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Graphique des prix</h2>
            <Line data={priceHistory} options={options} height={100} />
          </div>
          
          <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">À propos de {coin.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{coin.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Informations clés</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Capitalisation:</span>
                    <span>${(coin.marketCap / 1000000000).toFixed(2)}B</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Volume 24h:</span>
                    <span>${(coin.volume / 1000000000).toFixed(2)}B</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Offre en circulation:</span>
                    <span>{coin.circulatingSupply.toLocaleString()} {coin.symbol}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Détails techniques</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Algorithme:</span>
                    <span>{coin.consensusAlgorithm}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Date de lancement:</span>
                    <span>{coin.launchDate}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">ATH:</span>
                    <span>${coin.allTimeHigh.toLocaleString()}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ressources</h2>
            <ul className="space-y-3">
              <li>
                <a href={coin.website} target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:underline flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Site officiel
                </a>
              </li>
              <li>
                <a href={coin.whitepaper} target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:underline flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Prix vs ATH</span>
                  <span className="font-medium">{((coin.price / coin.allTimeHigh) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${coin.price >= coin.allTimeHigh * 0.8 ? 'bg-green-600' : coin.price >= coin.allTimeHigh * 0.5 ? 'bg-yellow-500' : 'bg-red-600'}`}
                    style={{ width: `${(coin.price / coin.allTimeHigh) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-dark-300 p-3 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Volume 24h</p>
                  <p className="font-medium">${(coin.volume / 1000000000).toFixed(2)}B</p>
                </div>
                <div className="bg-gray-100 dark:bg-dark-300 p-3 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Offre max</p>
                  <p className="font-medium">
                    {coin.maxSupply ? `${(coin.circulatingSupply / coin.maxSupply * 100).toFixed(1)}%` : 'Illimitée'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};