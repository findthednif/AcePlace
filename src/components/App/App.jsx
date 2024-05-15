import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchLine from '../SearchLine/SearchLine';
import CompanyCardsList from '../CompanyCardsList/CompanyCardsList';

export default function App() {
  return (
    <Router>
      <main className='main'>
        <Routes>
          <Route path='/' element={<SearchLine />} />
          <Route path='/info/:slug' element={<CompanyCardsList />} />
          <Route path='*' element={<SearchLine />} />
        </Routes>
      </main>
    </Router>
  );
}
