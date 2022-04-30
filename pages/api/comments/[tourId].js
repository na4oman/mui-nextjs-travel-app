// api/comments/some-tour-id

import { connectDatabase, getAllDocuments } from '../../../utility/db-util'

async function handler(req, res) {
  const { tourId } = req.query

  let client

  try {
    client = await connectDatabase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' })
    return
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(
        client,
        'comments',
        { tourId: tourId },
        { _id: -1 }
      )
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed!' })
    }
  }
  client.close()
}

export default handler
