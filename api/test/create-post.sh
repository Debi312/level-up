curl POST http://localhost:8080/posts -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmFiZTA1NjcxM2E4YmU5MmY4ZTU4NDQiLCJpYXQiOjE3MjQyNjk0MzUsImV4cCI6MTcyNDg3NDIzNX0.R2ClYLN1A1CVcyhN4C8KVrUUSAjnzj2tdTzKp9NMQBw" -H "Content-Type: application/json" -d '{"workoutId":"66b46fce589823a33b52cc98","image":"https://cdn.shopify.com/s/files/1/0274/4621/4721/files/wod-danielle-brandon.jpg?v=1678990866","description":"my second post with curl", "time": 60, "repetitions": 30, "weight": 100}' -v
