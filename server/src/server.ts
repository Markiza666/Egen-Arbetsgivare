import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5001;
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/own-employer';

mongoose.connect(mongoURI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });
    