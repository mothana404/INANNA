import { Suspense } from 'react';
import './App.css';
import './i18n';
import AppRoutes from './routes';

function App() {
  return (
    <Suspense fallback="Loading...">
      <AppRoutes />
    </Suspense>
  );
}

export default App;
