# Financial Dashboard (FDB)

A modern, responsive financial dashboard application built with React, TypeScript, and Tailwind CSS. Track your investments, expenses, portfolio performance, and financial metrics in real-time.

## Features

- 📊 **Portfolio Overview** - Visualize your total portfolio value and growth
- 📈 **Portfolio Growth Chart** - Track portfolio performance over time with interactive line charts
- 💰 **Asset Allocation** - See your investment distribution across different asset classes
- 💳 **Expense Tracking** - Monitor monthly expenses with interactive bar charts
- 📋 **Transaction History** - View recent transactions with filtering capabilities
- 📉 **Financial Metrics** - Display key financial indicators (savings rate, debt ratio, liquidity, etc.)
- 🎨 **Dark Theme** - Eye-friendly dark theme optimized for extended viewing
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Performance Optimized** - Built with Vite for fast loading and instant updates

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts & Visualization**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Date Management**: date-fns

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ssms00327-code/FDB.git
cd FDB
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Project Structure

```
FDB/
├── src/
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Main dashboard component
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Dashboard Sections

### Key Metrics
- Total Portfolio Value
- Monthly Income
- Monthly Expenses
- Year-to-Date Return

### Charts
- **Portfolio Growth**: Line chart showing portfolio value trends
- **Asset Allocation**: Pie chart displaying portfolio composition
- **Monthly Expenses**: Bar chart showing expense patterns

### Quick Stats
- Savings Rate
- Debt Ratio
- Portfolio Beta
- Liquidity

### Recent Transactions
Tabular view of recent financial transactions with:
- Transaction description
- Transaction date
- Transaction amount
- Income/Expense indicator

## Customization

### Adding Mock Data
Edit the data arrays in `src/App.tsx`:
- `portfolioData` - Portfolio growth over time
- `expenseData` - Monthly expense data
- `assetAllocation` - Asset class distribution
- `transactions` - Recent transactions list

### Connecting to a Real API
Replace the mock data with API calls:

```typescript
useEffect(() => {
  fetchPortfolioData()
    .then(data => setPortfolio(data))
    .catch(error => console.error(error));
}, []);
```

### Styling Customization
Modify `tailwind.config.ts` to customize:
- Color schemes
- Spacing values
- Typography settings
- Custom components

## Features Coming Soon

- 🔔 Real-time notifications for price alerts
- 📊 Advanced analytics and reporting
- 💱 Multi-currency support
- 📈 Technical analysis tools
- 🤖 AI-powered recommendations
- 🔐 Secure data encryption
- ☁️ Cloud synchronization
- 📱 Mobile app

## Performance Tips

- Use production build for deployment: `npm run build`
- Enable code splitting for large applications
- Optimize images and assets
- Implement lazy loading for heavy components
- Use React.memo for frequently rendered components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the GitHub repository.

## Roadmap

- [ ] User authentication system
- [ ] Database integration
- [ ] Backend API development
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF, CSV)
- [ ] Budget planning tools
- [ ] Goal setting features
- [ ] Multi-account support
- [ ] API integrations with financial institutions

---

Built with ❤️ for financial tracking and investment management
