const jsonServer=require('json-server')

const taskServer=jsonServer.create()

const cors=require('cors')

taskServer.use(cors())

const middleware=jsonServer.defaults()

taskServer.use(middleware)

const router=jsonServer.router('db.json')

taskServer.use(router)

const PORT=8010

taskServer.listen(PORT,()=>{
    console.log(`_________ Server starts at port.....${PORT}`);
})
