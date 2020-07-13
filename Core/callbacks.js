document.getElementById('button').addEventListener('click', () => {
    console.log('Button was clicked!')
})

window.addEventListener('load', () => {
    // window is now loaded
    // execute some code...
})

// error-first callbacks
fs.readFile('/file.json', (err, data) => {
    if (err !== null) {
        //handle error
        console.log(err)
        return
    }

    // no errors, process data
    console.log(data)
})

// nested callbacks ("callback hell")
window.addEventListener('load', () => {
    document.getElementById('button').addEventListener('click', () => {
        setTimeout(() => {
            items.forEach(item => {
                // do something
            })
        }, 2000);
    })
})