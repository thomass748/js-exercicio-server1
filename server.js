import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Boas-vindas ao servidor da escola")
})

app.get("/status", (req, res) => {
    res.json({status: 'Online'})
})

app.get("/escola", (req, res) => {
    res.json({
        nome: 'Senai',
        cidade: 'Valinhos',
        tipo_instituicao: 'Escola técnica'
    })
})

app.get("/cursos", (req, res) => {
    res.json(
        {id: 1, nome: 'Desenvolvimento de sistemas'},
        {id: 2, nome: 'Mecânica'},
        {id: 3, nome: 'Elétrica'}
    );
})

app.get("/professor", (req, res) => {
    res.json(
        {nome: 'Eduardo', discplina: 'Back-end'},
        {nome: 'Thiago', discplina: 'Bando-de-dados'},
        {nome: 'Maprim', discplina: 'Projetos'}
    )
})

app.get("/ajuda", (res, req) => {
    res.send(`
        /status
        /escola
        /cursos
        /professor
        /ajuda
    `)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servido em http://localhost:${PORT}`)
});