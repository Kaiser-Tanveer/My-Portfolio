import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
import "animate.css/animate.min.css";
import MatrixRain from './Components/MatrixRain/MatrixRain';

function App() {
  return (
    <div className="bg-hack-bg scroll-smooth font-mono relative min-h-screen">
      <div className="crt-overlay"></div>
      <div className="vignette-overlay"></div>
      <MatrixRain />
      <div className="relative z-10">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;