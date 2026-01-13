const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'ml-scoring-api',
    version: process.env.VERSION || '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Predict endpoint
app.get('/predict', (req, res) => {
  // Simulate ML prediction
  const score = Math.random() * 0.5 + 0.5; // Random between 0.5 and 1.0
  res.json({
    score: parseFloat(score.toFixed(2)),
    model: 'demo-model-v1',
    inference_time: '0.05s'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'ML Scoring API',
    endpoints: {
      health: 'GET /health',
      predict: 'GET /predict'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
  });
}
module.exports = app; // For testing
