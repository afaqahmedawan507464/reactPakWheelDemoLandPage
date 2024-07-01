import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
          {/* navigation bar */}
          <Navigation/>
          {/* ! navigation bar */}
          {/* main part */}
          <Main />
          {/* ! main part */}
          <Footer />
      </>
    </div>
  );
}

export default App;
