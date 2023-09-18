const ethers = require('ethers').ethers;
const coder = new ethers.AbiCoder()
if (process.argv.length < 3) {
  sys.exit(1)
}
const inputJson = process.argv[2]
const input = JSON.parse(inputJson)

const types = []
const values = []
input.parameters.forEach((item) => {
  types.push(item.type)
  values.push(item.value)
})
const method = `${input.method}(${types.join(',')})`
const sig = ethers.keccak256(Buffer.from(method)).slice(2, 10)
const encoded = coder.encode(types, values)
console.log(sig + encoded.slice(2))