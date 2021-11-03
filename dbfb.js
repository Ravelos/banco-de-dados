db.createCollection("usuarios")
db.createCollection("grupos")
db.createColletion("amigos")
db.createCollection("posts")

//Verificar se as collections foram criadas

//show collections

//inserir os dados da collection usuarios

db.usuarios.insertMany(
[
{
nome:"Luis",
sobrenome:"Rangel",
senha:"nose1",
cpf:"123456789",
idade:"19",
email:"luisr@gmail.com"
},
{
nome:"Raul",
sobrenome:"Rojas",
senha:"nose2",
cpf:"1234567890",
idade:"55",
email:"rrojas@gmail.com"
},
{
nome:"Alfredo",
sobrenome:"Vargas",
senha:"nose3",
cpf:"1234567891",
idade:"25",
email:"avargas@gmail.com"
},
{
nome:"Esteban",
sobrenome:"Marcano",
senha:"nose4",
cpf:"1234567892",
idade:"16",
email:"emarcano@gmail.com"
},
{
nome:"Juan Pablo",
sobrenome:"Ravelo",
senha:"juanpi",
cpf:"1234567893",
idade:"5",
email:"jpablo@gmail.com"
},
{
nome:"Max",
sobrenome:"Diaz",
senha:"nose5",
cpf:"1234567894",
idade:"36",
email:"mdiaz@gmail.com"
},
{
nome:"Fernando",
sobrenome:"Lopez",
senha:"nose6",
cpf:"1234567895",
idade:"9",
email:"fernandoal@gmail.com"
},
{
nome:"Caleb",
sobrenome:"Ravelo",
senha:"caleb2",
cpf:"1234567896",
idade:"2",
email:"calebr@gmail.com"
}
])

//inserir dados na collection amigos

db.amigos.insert(
{
"_id": ObjectId("61058cbf6e44f06994623906"),
cpf:123456789,
amigos:[
{
cpf:1234567890,
nome:"Raul",
Sobrenome:"Rojas"
},
{
cpf:1234567891,
nome:"Alfredo",
Sobrenome:"Vargas"
}
],
}
)

//inserimos mais dados na collection amigos

db.amigos.insert(
{
"_id" : ObjectId("61058cbf6e44f0699462390d"),
cpf:1234567896,
amigos:[
{
cpf:1234567895,
nome:"Fernando",
Sobrenome:"Lopez"
},
{
cpf:1234567894,
nome:"Max",
Sobrenome:"Diaz"
}
],
}
)

//verificamos que os dados estejam corretos con find pretty

db.amigos.find().pretty()

//inserindo dados na collection grupos

db.grupos.insert({
"_id" : ObjectId("61058cbf6e44f0699462390a"),
nome:"Grupo da faculdade",
usuarios:[
{
cpf:1234567895
},
{
cpf:1234567896
}
]})

//inserindo mas dados da collection grupos

db.grupos.insert({
"_id" : ObjectId("61058cbf6e44f0699462390d"),
nome:"Grupo dos meus filhos",
usuarios:[
{
cpf:1234567893
},
{
cpf:1234567896
},
{
cpf:1234567895
},
]})

//verificamos a collection grupos

db.grupos.find().pretty()

//inserindo dados na collection posts

db.posts.insert(
{
"_id" : ObjectId("61058cbf6e44f0699462390b"),
tipo:"video",
url:UUID(),
titulo:"Na praia a vida é mais prazerosa",
comentarios:[
{
comentario:"E bom mesmo",
cpf:1234567896
},
{
comentario:"LOL",
cpf:1234567893
}
],
cpf:1234567894,
data_creation:"newDate(2013,05,22)"
}
)

//inserimos mais dados

db.posts.insert(
{
"_id" : ObjectId("61058cbf6e44f06994623908"),
tipo:"foto",
url:UUID(),
titulo:"Com meus filhos",
comentarios:[
{
comentario:"Blz",
cpf:1234567892
},
{
comentario:"LOL",
cpf:1234567890
}
],
cpf:1234567891,
data_creation:"newDate(2015,02,15)"
}
)