install:
	npm i
build:
	npx pkg -o encoder -t node18-macos-arm64 index.js
	chmod +x encoder