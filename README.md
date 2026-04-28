# Travel App - Next.js & Material-UI

A modern, responsive travel application built with Next.js and Material-UI, featuring tour listings, interactive maps, user comments, and bookmarking functionality.

## 🌟 Features

- **Tour Discovery**: Browse and explore various travel destinations
- **Interactive Maps**: Integrated Mapbox GL for location visualization
- **User Comments**: Real-time commenting system with SWR data fetching
- **Bookmarks**: Save favorite tours for later viewing
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, professional interface using Material-UI components
- **Real-time Updates**: Live data synchronization with SWR

## 🛠️ Tech Stack

- **Frontend**: Next.js, React 18
- **UI Framework**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Database**: MongoDB
- **Maps**: Mapbox GL
- **Data Fetching**: SWR for real-time data synchronization
- **Carousel**: React Responsive Carousel
- **Animations**: React Transition Group

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager
- MongoDB database connection
- Mapbox API key (for map functionality)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/na4oman/mui-nextjs-travel-app.git
cd mui-nextjs-travel-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── Comments.js     # Comment system component
│   └── TourCard.js     # Tour display card
├── pages/              # Next.js pages and API routes
│   ├── api/           # API endpoints
│   ├── [id].js        # Dynamic tour detail pages
│   ├── bookmarks.js   # Bookmarks page
│   └── index.js       # Home page
├── src/               # Source utilities and context
├── styles/            # Global styles
├── data/              # Static data files
└── public/            # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 API Routes

The application includes several API endpoints:

- `/api/comments/[tourId]` - Get comments for a specific tour
- Additional API routes for tour data and user interactions

## 📱 Key Components

### TourCard
Displays tour information with images, descriptions, and interactive elements.

### Comments
Real-time commenting system with user avatars and message display.

### Interactive Maps
Mapbox integration for location visualization and navigation.

## 🎨 UI/UX Features

- **Material Design**: Consistent design language throughout the app
- **Responsive Layout**: Adapts to different screen sizes
- **Loading States**: Smooth loading indicators and error handling
- **Interactive Elements**: Hover effects and smooth transitions

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your project to Vercel
3. Add your environment variables
4. Deploy with one click

### Other Deployment Options

- **Netlify**: Connect your Git repository for automatic deployments
- **AWS Amplify**: Full-stack deployment with backend services
- **Docker**: Containerized deployment for any cloud provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [Mapbox GL Documentation](https://docs.mapbox.com/mapbox-gl-js/)
- [SWR Documentation](https://swr.vercel.app/)

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/na4oman/mui-nextjs-travel-app/issues) on GitHub.
