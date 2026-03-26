import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';
import RouteAnnouncer from './components/common/RouteAnnouncer';

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <RouteAnnouncer />
            <AppRoutes />
        </Router>
    );
};

export default App;
