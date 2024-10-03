( ()=>{
    console.log('Está funcionando')

    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    })

    overworld.init()
})()