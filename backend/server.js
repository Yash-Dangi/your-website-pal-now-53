const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURL = 'mongodb+srv://yashd:AH6zWa2wTF0iSpsV@cluster0.xy8jozl.mongodb.net/pitch_pair?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURL, {
  dbName: 'pitch_pair',
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Mongoose Schema (accommodates both founder and investor fields)
const SubmissionSchema = new mongoose.Schema({
  // Common
  type: { type: String, required: true }, // 'founder', 'investor', or 'ecosystem'
  submittedAt: { type: Date, default: Date.now },

  // Founder fields
  name: String,
  email: String,
  phone: String,
  startupName: String,
  website: String,
  stage: String,
  sectors: String,
  investorTypes: [String],
  challenge: String,

  // Investor fields
  fullName: String,
  chequeSize: String,
  stages: [String],
  anythingElse: String,

  // Ecosystem fields
  ecoName: String,
  ecosystemRoles: [String],
  ecosystemOther: String,
  updates: String,
  ecosystemAnything: String,
}, { collection: 'form_response' });

const Submission = mongoose.model('Submission', SubmissionSchema);

// Add after other imports
const WebsiteHitSchema = new mongoose.Schema({
  hits: { type: Number, default: 1 },
}, { collection: 'website_hits' });
const WebsiteHit =   mongoose.models.WebsiteHit || mongoose.model('WebsiteHit', WebsiteHitSchema);

// API endpoint
app.post('/api/submit', async (req, res) => {
  try {
    if (!req.body.type) {
      return res.status(400).json({ error: 'Missing type field' });
    }
    if (req.body.type === 'founder' && !req.body.email) {
      return res.status(400).json({ error: 'Missing email field' });
    }
    if (req.body.type === 'investor' && !req.body.email) {
      return res.status(400).json({ error: 'Missing email field' });
    }
    if (req.body.type === 'ecosystem') {
      if (!req.body.ecoName || !req.body.email) {
        return res.status(400).json({ error: 'Missing ecoName or email for ecosystem enabler' });
      }
    }
    const submission = new Submission(req.body);
    await submission.save();
    res.status(201).json({ message: 'Submission successful' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

app.post('/api/website-hit', async (req, res) => {
  try {
    console.log("Received website-hit request");
    let doc = await WebsiteHit.findOne();
    console.log("findOne result:", doc);
    if (doc) {
      doc.hits += 1;
      await doc.save();
      console.log("Updated hits:", doc.hits);
      return res.json({ hits: doc.hits });
    } else {
      const newDoc = new WebsiteHit({ hits: 1 });
      await newDoc.save();
      console.log("Created new hits document");
      return res.json({ hits: 1 });
    }
  } catch (err) {
    console.error("Error in /api/website-hit:", err);
    res.status(500).json({ error: 'Failed to update website hits' });
  }
});

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 