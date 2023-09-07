require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/api', async (req, res) => {
    try {
        const { slack_name, track } = req.query
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' })


        const currentTime = new Date();
        const randomOffset = (Math.random() * 4 - 2) * 60 * 1000;
        const utcTimeWithOffset = new Date(currentTime.getTime() + randomOffset);
        const formattedUtcTime = utcTimeWithOffset.toISOString().slice(0, -5) + 'Z';

        res.status(200).json({
            slack_name: slack_name,
            current_day: currentDay,
            utc_time: formattedUtcTime,
            track: track,
            github_file_url: 'https://github.com/AjKenz/HNG_stage_1/blob/main/index.js',
            github_repo_url: 'https://github.com/AjKenz/HNG_stage_1',
            status_code: 200
        })
    }
    catch (error) {
        console.log('an error occured ' + error.message)
        res.status(500).json({
            message: 'Internal server Error' || error.message
        })
    }
})


app.get('/', (req, res) => {
    res.json({
        message: 'HNG backend stage 1'
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is runnig on: ' + port)
})