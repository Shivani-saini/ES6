const userLeft = false
const userWatchingCatMeme = true

function watchtutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'this is user',
            message: ':('
        })
    } else if(userWatchingCatMeme){
        errorCallback({
            name: 'user Watching Cat Meme',
            message: 'hello kitty < Cat'
        })
    } else {
        callback('Thumbs up and subscribe')
    }
}

watchtutorialCallback((message) => {
    console.log('Success: '+ message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})