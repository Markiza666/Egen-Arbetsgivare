import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.scss';

const App: React.FC = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
