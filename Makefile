install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
lint:
	node_modules/.bin/eslint ./src/bin/*.js		
