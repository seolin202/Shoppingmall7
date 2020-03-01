// express loading
const express = require('express');
// express 실행되는 것을 app이라고 상수화
const app = express();
// server.js파일에서 라우트를 만들고 상수화
// require(경로)를 ordersRoute, producstRoute로 상수화
const productsRoute = require('/api/routes/products');
const ordersRoute = require('/api/routes/orders');

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

// port는 3000번
const port = 3000;
// app중 .listen module실행, console.log를 통해 server가 실행되면 server started..라는 string을 print
app.listen(port, console.log('server started..'));