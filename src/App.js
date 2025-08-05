import './App.css';
import Home from './pages/Home';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <Analytics /> {/* <-- This sends page view data to Vercel */}
    </div>
  );
}

export default App;
