const ethers = require('ethers').ethers;
const coder = new ethers.AbiCoder()
if (process.argv.length < 3) {
  sys.exit(1)
}
const inputJson = process.argv[2]
const input = JSON.parse(inputJson)

const types = []
const values = []
for (const item of input.parameters) {
  types.push(item.type)
  values.push(item.value)
}
const method = ethers.keccak256(Buffer.from(`${input.name}(${types.join(',')})`)).slice(2, 10)

const encoded = coder.encode(types, values)
console.log(method + encoded.slice(2))