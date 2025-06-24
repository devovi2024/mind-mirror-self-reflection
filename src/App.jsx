import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ReflectionForm from './components/ReflectionForm';


function MindMirror() {
  return (
    <div >
      <ReflectionForm />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reflection" element={<MindMirror />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
