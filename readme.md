Current endpoints 


server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);

server.use('/api/inventory', inventoryRouter);

server.get('/', (req, res) => { res.send("Server is running"); });

items missing: 

x vin#
x fuel economy
x color interior
x color exterior
x fabric
x body type

photos