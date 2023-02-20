const express = require('express')
const youtubedl = require('youtube-dl-exec')
const app = express()

app.get('/', (req, res) => {
        youtubedl(req.query.url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: [
                'referer:youtube.com',
                'user-agent:googlebot'
        ]}).then(output => res.send(output))
})

app.listen(80)
