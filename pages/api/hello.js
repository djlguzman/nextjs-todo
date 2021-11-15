// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(process.env.TEST_KEY)
  console.log(process.env.NEW_KEY)
  res.status(200).json({ name: 'John Doe' })
}
