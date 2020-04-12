events.listen('server.datapack.recipes', function(event){
    event.shaped("angelring:itemdiamondring",[
        'DBD',
        'BJB',
        'DBD'
    ], {
        D: '#forge:gems/diamond',
        B: '#forge:storage_blocks/diamond',
        J: '#ironjetpacks:tier5'
    })
})