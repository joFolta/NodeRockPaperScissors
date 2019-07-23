// Morning Challenge - Rock, Paper, Scissors, Lizard, Spock using es6 and served by a simple node server (http module), no peaking at your past R,P,S code and push to Github. You will have under 90mins. Get as far as you can!
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

const http = require('http')
const fs = require('fs')
const url = require('url')
//needed??
const querystring = require('querystring')
const server = http.createServer((req,res) => {
  const page = url.parse(req.url).pathname
  //needed??
  const params = querystring.parse(url.parse(req.url).query)
  console.log(page)

  if (page == '/'){
    fs.readFile('index.html', (err,data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  }
  //Other Page
  else if (page == '/otherpage'){
    fs.readFile('otherpage.html',(err,data) => {
      res.writeHead(200, {'Content-Type': 'text.html'})
      res.write(data)
      res.end()
    })
  }
  else if (page == '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    let objToJson = {
      throwResult: randomThrow()
    }
    res.end(JSON.stringify(objToJson))

    function randomThrow(){
      let result = Math.random()
      switch(true){
        case (result<0.2):
          console.log("rock")
          return "rock"
          break
        case (result<0.4):
          console.log("paper")
          return "paper"
          break
        case (result<0.6):
          console.log("scissors")
          return "scissors"
          break
        case (result<0.8):
          console.log("lizard")
          return "lizard"
          break
        case (result<1):
          console.log("spock")
          return "spock"
      }
    }
    randomThrow()
  }


  else{
    //HOW TO PRINT 404 TO DOM w/o FIGLET module???
    console.log("404 error; Please enter valid URL.")
  }

})

server.listen(8000)


// Game Logic
// function randomThrow(){
//   let result = Math.random()
//   switch(true){
//     case (result<0.2):
//       alert("rock")
//       break
//     case (result<0.4):
//       alert("paper")
//       break
//     case (result<0.6):
//       alert("scissors")
//       break
//     case (result<0.8):
//       alert("lizard")
//       break
//     case (result<1):
//       alert("spock")
//   }
// }
// randomThrow()


//
// else if (page == '/api'){
//   function randomThrow(){
//     let result = Math.random()
//     switch(true){
//       case (result<0.2):
//         console.log("rock")
//         break
//       case (result<0.4):
//         console.log("paper")
//         break
//       case (result<0.6):
//         console.log("scissors")
//         break
//       case (result<0.8):
//         console.log("lizard")
//         break
//       case (result<1):
//         console.log("spock")
//     }
//   }
//   randomThrow()
// }
