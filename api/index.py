# Vercel serverless function entry point
import sys
import os

# Add the Flask app directory to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'LostNoMore_flask'))

from app import app

# Vercel expects the app to be named 'app' or exposed as a handler
handler = app
