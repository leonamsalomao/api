

const express = require('express') /* importar o express */

const app = express() /* inicializando o express */

app.get('/message/:id/user', (request, response) => {
  response.send(`Id da mensagem: ${request.params.id}`)
})

const PORT = 3333 /* porta */
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))/* observe a porta e execute ao iniciar */

