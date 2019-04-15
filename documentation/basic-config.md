npm init -y
npm install --save @babel/core @babel/cli @babel/preset-env @babel/node
npm install --save-dev nodemon

// new file
touch .babelrc
{
  "presets": [
    "@babel/preset-env"
  ]
}

// Edit package.json


  "main": "src/app.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/app.js ",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
    "repository": {
    "type": "git",
  },
