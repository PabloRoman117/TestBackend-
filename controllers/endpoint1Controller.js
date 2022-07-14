const objeto = (req, res) => {
    
    const objetoMuestra = {
        A: true,
        B: false,
        C: 'Hola'
    };

    const objetoFiltrado = Object.keys(objetoMuestra).filter(key => {
        return objetoMuestra[key] === true || typeof objetoMuestra[key] === 'string';
    }) 

    const objetoMostrado = objetoFiltrado.map(key => {
        return objetoMuestra[key];
    })

    const objetoMostrado2 = objetoMostrado.join(',');

    const objetoMostrado3 = objetoMostrado2.replace(/,/g, '<br>');

    res.send(objetoMostrado3);
    
   



   

    
}




export {
    objeto
}