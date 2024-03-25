const mongoose = require('mongoose');
const url_db ='mongodb://localhost:27017/utma'

mongoose.connect(url_db)
.then(()=> {
    console.log('conexion exotosa')
})
.catch((err) =>{
    console.log('no jalo la puta mamada')
})

const esquema_alumnos = new mongoose.Schema( //funcion de mongo
    {
        name: {
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        telnumber:{
            type:Number
        },
        fechanac:{
            type:Date
        },
    }
)

const alumnos = new mongoose.model('tabla de registro de alumnos', esquema_alumnos)

alumnos.create(
    {
        name:'angela',
        apepat:'luna',
        apemat:'fabian',
        telnumber: 4491965800,
        fechanac: new Date('2004, 08, 02'),

    }
)