# Financial Dashboard - Electron Desktop App

A modern, professional financial dashboard application built with React, TypeScript, Electron, and Tailwind CSS. Track your investments, expenses, portfolio performance, and financial metrics as a native Windows desktop application.

## Features

- 📊 **Portfolio Overview** - Visualize your total portfolio value and growth
- 📈 **Portfolio Growth Chart** - Track portfolio performance over time with interactive line charts
- 💰 **Asset Allocation** - See your investment distribution across different asset classes
- 💳 **Expense Tracking** - Monitor monthly expenses with interactive bar charts
- 📋 **Transaction History** - View recent transactions with filtering capabilities
- 📉 **Financial Metrics** - Display key financial indicators (savings rate, debt ratio, liquidity, etc.)
- 🎨 **Dark Theme** - Eye-friendly dark theme optimized for extended viewing
- 📱 **Fully Responsive** - Works seamlessly on all screen sizes
- ⚡ **Performance Optimized** - Built with Vite for fast loading and instant updates
- 🖥️ **Desktop App** - Native Windows executable with Electron

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts & Visualization**: Recharts
- **Icons**: Lucide React
- **Desktop**: Electron
- **Build Tool**: Vite + electron-builder
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Windows OS (for EXE distribution)

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

4. In another terminal, start Electron:
```bash
npm run electron
```

## Available Scripts

### Development
- `npm run dev` - Start Vite dev server (http://localhost:5173)
- `npm run electron` - Start Electron app
- `npm run electron-dev` - Build and start Electron in dev mode

### Production
- `npm run build` - Build React app for production
- `npm run build:win` - Build Windows EXE installer and portable executable
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Building Windows EXE

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Application
```bash
npm run build:win
```

This will create:
- **NSIS Installer**: `Financial Dashboard Setup x.x.x.exe` - Full installer with uninstaller
- **Portable EXE**: `Financial Dashboard x.x.x.exe` - Single executable, no installation needed

### Output Location
The EXE files will be created in the `dist/` directory

### Distribution
You can now distribute the EXE files to end users. They can:
1. Run the portable EXE directly
2. Run the installer to install the application with Start Menu shortcuts and uninstaller

## Project Structure

```
FDB/
├── electron/
│   ├── main.ts              # Electron main process
│   └── preload.ts           # Electron preload script
├── src/
│   ├── main.tsx             # React entry point
│   ├── App.tsx              # Main dashboard component
│   └── index.css            # Global styles
├── scripts/
│   └── build-exe.js         # Build script for EXE
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── .electronrc.json         # Electron configuration
└── README.md                # This file
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

### Electron Configuration
Edit `package.json` build section to customize:
- App icon
- Window size
- Installer settings
- Code signing (production)

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

- Use production build for deployment: `npm run build:win`
- Enable code splitting for large applications
- Optimize images and assets
- Implement lazy loading for heavy components
- Use React.memo for frequently rendered components

## Browser/OS Support

- **OS**: Windows 7 and above
- **Architecture**: x64

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
- [ ] Auto-update functionality
- [ ] System tray integration
- [ ] Keyboard shortcuts guide

## Troubleshooting

### EXE won't launch
- Make sure you have the latest Visual C++ redistributable installed
- Try running as administrator
- Check Windows Defender hasn't quarantined the app

### Build fails
- Delete `node_modules` and `package-lock.json`, then run `npm install`
- Clear Vite cache: `rm -rf dist`
- Ensure you're on Node.js v16 or higher

### Port already in use
- Change the port in `vite.config.ts`
- Or kill the process using port 5173

---

Built with ❤️ for financial tracking and investment management

**Version**: 1.0.0  
**Last Updated**: 2026-06-07
