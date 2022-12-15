// POST api/login?email=renatodex@gmail.com&password=123456
export default async function handler(req, res) {
  const { code } = req.query

  console.log(req.headers.authorization, code)

  if (req.method === 'GET') {
    const request = await fetch(`http://localhost:5000/api/characters/${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization,
      },
    })

    try {
      const response = await request.json();
      res.status(request.status).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  } else {
    res.status(400).json({ error: 'This request must be GET' })
  }
}