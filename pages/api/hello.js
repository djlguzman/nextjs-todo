// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const newKey = process.env.NEW_KEY;

console.log(newKey)
console.log("test branch deploys")

export default function handler(req, res) {
  console.log(process.env.TEST_KEY)
  console.log(newKey)
  res.status(200).json({ name: 'John Doe' })
}
