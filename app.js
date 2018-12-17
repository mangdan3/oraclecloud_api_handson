var app= require('express')();

app.get('/users', function(req, res) {
  res.json({
            "Users": [
                {
                    "id": 123,
                    "name": "Christian"
                }
            ]
        });
});

app.get('/users/:id', function(req, res) {
  res.json({
            "id": 1,
            "name": "Dan"
        });
});

app.put('/users', function(req, res) {
  res.json({
            "status": "success"
        });
});

app.post('/users', function(req, res) {
    res.status(201).end();
});


app.get('/groups', function(req, res) {
  res.json({
  "Groups": [
    {
      "created": "2018",
      "owner": "Dan",
      "groupid": "1",
      "groupname": "group",
      "Users": [
        {
          "userid": "1",
          "username": "Dan"
        }
      ]
    }
  ]
});
});

app.get('/groups/:id', function(req, res) {
  res.json({
  "Groups": [
    {
      "created": "2018",
      "owner": "Dan",
      "groupid": "1",
      "groupname": "group",
      "Users": [
        {
          "userid": "1",
          "username": "Dan"
        }
      ]
    }
  ]
});
});

app.listen(3000);
