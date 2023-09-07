require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/api', async (req, res) => {
    try{
        const {slack_name, track} = req.query

        res.json({
            slack_name: slack_name,
            current_day: '',
            utc_time: '',
            track: track,
            git_file_url: '',
            git_repo_url: '',
            status_code: 'success'
        })
    }
    catch(error){
        console.log('an error occured ' + error.message)
    }
})


app.get('/', (req, res)=>{
    res.json({
        message: 'HNG backend stage 1'
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is runnig on: '+ port)
})