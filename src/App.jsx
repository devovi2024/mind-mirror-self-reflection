import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ReflectionForm from './components/ReflectionForm';
import EntryList from './components/EntryList';
import StatsPanel from './components/StatsPanel';

function MindMirror() {
  return (
    <div >
      <h1 >🧠 MindMirror</h1>
      <ReflectionForm />
      {/* <EntryList />
      <StatsPanel /> */}
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
