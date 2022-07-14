const objeto2 = (req, res) => {
   
    const string = {
        cadena: 'Hola Mundo',
        tamaño: '',
        valor: '',
        valorReves: '',

    }

    string.tamaño = string.cadena.length;
    string.valor = typeof string.cadena;
    string.valorReves = string.cadena.split('').reverse().join('');
    

    res.send(string);


}




export {
    objeto2
}