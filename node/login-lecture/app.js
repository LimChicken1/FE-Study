const exprees = require("express");
const app = exprees();


app.get("/", (req, res) => {
  res.send("여기는 루트입니다");
});

app.get("/login", (req, res) => {
  res.send("여기는 로그인 화면입니다.");
});

app.listen(3000, function () {
  console.log("서버가동");
});
