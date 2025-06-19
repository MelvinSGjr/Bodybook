const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Роуты
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// Статические файлы (отдаём client/public)
app.use(express.static(__dirname + '/../client/public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Bodybook server running on port ${PORT}`);
}); 