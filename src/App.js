import React from 'react'
//import logo from './logo.svg';
//import './App.css';

//import LazyComponent from './LazyComponent'
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <h1>App</h1>...

      <button onClick={() => setIsLoaded(true)}>load</button>

      <React.Suspense fallback={<div>not loaded yet</div>}>
        { isLoaded && (<LazyComponent />) }
      </React.Suspense>
    </>
  );
}

export default App;
