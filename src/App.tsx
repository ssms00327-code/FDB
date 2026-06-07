import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Wallet, DollarSign, PieChart as PieChartIcon, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

// Mock data
const portfolioData = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 48000 },
  { month: 'Mar', value: 52000 },
  { month: 'Apr', value: 49000 },
  { month: 'May', value: 58000 },
  { month: 'Jun', value: 62000 },
];

const expenseData = [
  { month: 'Jan', expenses: 2000 },
  { month: 'Feb', expenses: 2100 },
  { month: 'Mar', expenses: 1900 },
  { month: 'Apr', expenses: 2300 },
  { month: 'May', expenses: 2050 },
  { month: 'Jun', expenses: 2200 },
];

const assetAllocation = [
  { name: 'Stocks', value: 45, color: '#3b82f6' },
  { name: 'Bonds', value: 25, color: '#10b981' },
  { name: 'Real Estate', value: 20, color: '#f59e0b' },
  { name: 'Cash', value: 10, color: '#6366f1' },
];

const transactions = [
  { id: 1, description: 'Stock Purchase - Apple', amount: 2500, type: 'expense', date: '2026-06-05' },
  { id: 2, description: 'Dividend Payment', amount: 250, type: 'income', date: '2026-06-04' },
  { id: 3, description: 'Bond Purchase', amount: 5000, type: 'expense', date: '2026-06-03' },
  { id: 4, description: 'Interest Payment', amount: 180, type: 'income', date: '2026-06-02' },
  { id: 5, description: 'Real Estate Investment', amount: 10000, type: 'expense', date: '2026-06-01' },
];

function App() {
  const totalPortfolio = 62000;
  const monthlyIncome = 5000;
  const monthlyExpenses = 2200;
  const investmentReturn = 38;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Wallet className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl font-bold text-white">Financial Dashboard</h1>
          </div>
          <p className="text-slate-400">Monitor your investments and finances at a glance</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Total Portfolio</p>
                <p className="text-3xl font-bold text-white mt-2">${totalPortfolio.toLocaleString()}</p>
              </div>
              <DollarSign className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Monthly Income</p>
                <p className="text-3xl font-bold text-white mt-2">${monthlyIncome.toLocaleString()}</p>
              </div>
              <ArrowUpRight className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Monthly Expenses</p>
                <p className="text-3xl font-bold text-white mt-2">${monthlyExpenses.toLocaleString()}</p>
              </div>
              <ArrowDownLeft className="w-12 h-12 text-red-500 opacity-20" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">YTD Return</p>
                <p className="text-3xl font-bold text-white mt-2">{investmentReturn}%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Portfolio Growth */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Portfolio Growth
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={portfolioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Asset Allocation */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-purple-500" />
              Asset Allocation
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={assetAllocation} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expenses Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Monthly Expenses</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Bar dataKey="expenses" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Savings Rate</p>
                <p className="text-2xl font-bold text-green-500">56%</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Debt Ratio</p>
                <p className="text-2xl font-bold text-yellow-500">12%</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Portfolio Beta</p>
                <p className="text-2xl font-bold text-blue-500">0.95</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Liquidity</p>
                <p className="text-2xl font-bold text-purple-500">$6,200</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Description</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Date</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-slate-700 hover:bg-slate-700 transition">
                    <td className="py-3 px-4 text-white">{tx.description}</td>
                    <td className="py-3 px-4 text-slate-400">{tx.date}</td>
                    <td className={`py-3 px-4 text-right font-semibold ${tx.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                      {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-400">
          <p>&copy; 2026 Financial Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
