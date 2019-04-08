install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
calc:
	npm run babel-node -- src/bin/brain-calc.js
gsd:
	npm run babel-node -- src/bin/brain-gsd.js
balance:
	npm run babel-node -- src/bin/brain-balance.js
progression:
	npm run babel-node -- src/bin/brain-progression.js
prime:
	npm run babel-node -- src/bin/brain-prime.js
lint:
	npm run eslint -- src
build:
	rm -rf dist
	npm run build
