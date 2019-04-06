install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
calc:
	npm run babel-node -- src/bin/brain-calc.js
lint:
	npm run eslint ./src/bin/*.js		
