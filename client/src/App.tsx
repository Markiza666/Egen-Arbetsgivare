import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/scroll/ScrollToTop';
import RouteAnnouncer from './components/common/RouteAnnouncer';
import { SearchProvider } from './context/SearchProvider';

const App: React.FC = () => {
    return (
        <Router>
            {/* Wrap the entire application logic in the SearchProvider */}
            <SearchProvider>
                <ScrollToTop />
                <RouteAnnouncer />
                <AppRoutes />
            </SearchProvider>
        </Router>
    );
};

export default App;
