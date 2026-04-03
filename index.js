import serverless from 'serverless-http'
import app from './app.js'



exports.handler = serverless(app);