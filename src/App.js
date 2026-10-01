import { RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css';
import router from './Routes/Routes';
import MatrixRain from './Components/MatrixRain/MatrixRain';
import 'react-photo-view/dist/react-photo-view.css';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className='min-h-screen bg-[color:var(--bg)]'>
      <div className="crt-overlay"></div>
      <div className="vignette-overlay"></div>
      <MatrixRain />
      <div className="relative z-[2]">
        <RouterProvider router={router}>
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;