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
import { marketStats } from '../../data/coins';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const MarketOverview = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Capitalisation du marché (en milliards)',
        data: [850, 920, 1000, 1100, 1050, 1245],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Aperçu du marché</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Analyse des tendances du marché et des performances des principales cryptomonnaies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
          <Line data={data} options={options} />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Dominance du marché</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Bitcoin</span>
                  <span>{marketStats.dominance.btc}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5">
                  <div 
                    className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full" 
                    style={{ width: `${marketStats.dominance.btc}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Ethereum</span>
                  <span>{marketStats.dominance.eth}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5">
                  <div 
                    className="bg-secondary-light dark:bg-secondary-dark h-2.5 rounded-full" 
                    style={{ width: `${marketStats.dominance.eth}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Statistiques clés</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Capitalisation totale</span>
                <span className="font-medium">${(marketStats.totalMarketCap / 1000000000).toFixed(1)}B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Volume 24h</span>
                <span className="font-medium">${(marketStats.totalVolume24h / 1000000000).toFixed(1)}B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Cryptos actives</span>
                <span className="font-medium">{marketStats.activeCryptocurrencies.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};