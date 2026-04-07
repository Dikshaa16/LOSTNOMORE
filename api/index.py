import os
import sys

# Add parent directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from flask import Flask, jsonify

# Create a minimal Flask app for Vercel
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key')

# Disable SQLAlchemy modifications tracking
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Use environment variable for database or in-memory for serverless
database_url = os.environ.get('DATABASE_URL')
if database_url:
    # Use PostgreSQL if provided
    app.config['SQLALCHEMY_DATABASE_URI'] = database_url
else:
    # For testing - won't persist data
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

@app.route('/')
def index():
    return jsonify({
        'status': 'success',
        'message': 'LostNoMore API is running!',
        'note': 'This is a serverless deployment. Full functionality requires database configuration.'
    })

@app.route('/api/health')
def health():
    return jsonify({'status': 'healthy', 'service': 'LostNoMore'})

# Only import full app if database is configured
if database_url:
    try:
        # Import the full Flask app
        sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'LostNoMore_flask'))
        from app import app as full_app
        app = full_app
    except Exception as e:
        @app.route('/error')
        def error():
            return jsonify({'error': str(e), 'message': 'Failed to load full app'})

# Vercel handler
handler = app
