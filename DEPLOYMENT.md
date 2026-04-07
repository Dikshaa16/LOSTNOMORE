# 🚀 Deploy LostNoMore to Render.com

## Quick Start (5 minutes)

### Step 1: Sign Up on Render
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with your GitHub account

### Step 2: Create New Web Service
1. Click "New +" button in dashboard
2. Select "Web Service"
3. Connect your GitHub repository: `Dikshaa16/LOSTNOMORE`
4. Render will detect the `render.yaml` file automatically

### Step 3: Configure (Auto-configured via render.yaml)
The following settings are already configured in `render.yaml`:
- **Name:** lostnomore
- **Environment:** Python
- **Build Command:** `cd LostNoMore_flask && pip install -r requirements.txt`
- **Start Command:** `cd LostNoMore_flask && gunicorn --bind 0.0.0.0:$PORT app:app`
- **Python Version:** 3.11.0

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait 3-5 minutes for deployment
3. Your app will be live at: `https://lostnomore.onrender.com`

## ⚠️ Important Notes

### Free Tier Limitations
- App sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- 750 hours/month free (enough for most projects)

### Database Persistence
- SQLite database is stored on a persistent disk (1GB)
- Data will persist across deployments
- Backup your database regularly

### File Uploads
- Uploaded images are stored on persistent disk
- Files will persist across deployments
- 1GB storage limit on free tier

## 🔧 Environment Variables (Optional)

If you want to add custom environment variables:
1. Go to your service dashboard
2. Click "Environment" tab
3. Add variables:
   - `SECRET_KEY` (auto-generated)
   - `MAIL_USERNAME` (if using email)
   - `MAIL_PASSWORD` (if using email)

## 📊 Monitoring

### View Logs
1. Go to your service dashboard
2. Click "Logs" tab
3. See real-time application logs

### Check Status
- Green dot = Running
- Yellow dot = Deploying
- Red dot = Failed

## 🐛 Troubleshooting

### Build Failed
- Check the build logs in Render dashboard
- Verify all dependencies are in `requirements.txt`

### App Not Loading
- Check if the service is sleeping (free tier)
- Wait 30 seconds for wake-up
- Check logs for errors

### Database Issues
- Ensure disk is properly mounted
- Check if migrations ran successfully
- Verify database file permissions

## 🔄 Updating Your App

Every time you push to GitHub:
1. Render automatically detects changes
2. Rebuilds and redeploys your app
3. Zero downtime deployment

## 💡 Upgrade Options

### To avoid sleep time:
- Upgrade to Starter plan ($7/month)
- App stays always-on
- Better performance

### For production:
- Use PostgreSQL instead of SQLite
- Add Redis for caching
- Enable auto-scaling

## 📞 Support

- Render Docs: https://render.com/docs
- Community: https://community.render.com
- Status: https://status.render.com

---

**Your app is ready to deploy! Just follow Step 1-4 above.** 🎉
