// import json-server
const jsonserver=require('json-server')

// create server running json file

const server=jsonserver.create()

//set up path/route for json file

const route=jsonserver.router('db.json')

// create middleware for data parsing

const middleware=jsonserver.defaults()

// use middleware,route
server.use(middleware)
server.use(route)

// create a  sever port number

const PORT=3000
server.listen(PORT,()=>{
    console.log('server start running');
    
})