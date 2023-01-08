import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import fullBg from '../src/Assets/PP/fullBg.png';
import 'react-photo-view/dist/react-photo-view.css';
import "animate.css/animate.min.css";


function App() {
  return (
    <div className='bg-slate-800 scroll-smooth' style={{ backgroundImage: `url(${fullBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
