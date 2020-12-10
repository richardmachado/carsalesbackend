Current endpoints 


server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);

server.use('/api/inventory', inventoryRouter);

server.get('/', (req, res) => { res.send("Server is running"); });

items missing: 

vin#
fuel economy
color interior
color exterior
fabric
body type

photos