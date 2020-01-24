const express = require ('express')

const app = express()

app.get('',(req,res)=>{
    res.send('root page')
})

app.get('/help',(req,res)=>{
    res.send('<h2>help page</h2>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>')
})
app.get('/cotacoes',(req,res)=>{

    const cotacao ={
        symbol: 'ABV',
        preco:'12.44',
        max:'698',
        defautl:'test'
    }
    res.send(cotacao)
})
app.listen(80,()=>{
    console.log('server running port 3000')
})