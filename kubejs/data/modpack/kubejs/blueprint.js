events.listen('server.datapack.recipes', function(event){
    event.remove({output: 'silentgear:blueprint_paper'})
    event.shaped(item.of("silentgear:blueprint_paper", 4),[
        'PPP',
        'PB ',
        '   '
    ], {
        P: '#forge:paper',
        B: '#forge:dyes/blue'
    })
})