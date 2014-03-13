var express = require('express')
  , app = express()
  , port = process.env.PORT || 4002;

app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('app listening on port %d', port);
});
