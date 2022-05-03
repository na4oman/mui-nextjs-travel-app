// api/comments/some-tour-id

import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from '../../../utility/db-util'

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
        { tourId: tourId.toString() },
        { _id: -1 }
      )
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed!' })
    }
  }

  if (req.method === 'POST') {
    const { name, text } = req.body

    if (
      !name ||
      name.trim().length === 0 ||
      !text ||
      text.trim().length === 0
    ) {
      res.status(442).json({ message: 'Invalid inputs' })
      client.close()
      return
    }

    const newComment = {
      message: text,
      author: name,
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      tourId: tourId.toString(),
    }

    let result

    try {
      result = await insertDocument(client, 'comments', newComment)
      newComment.id = result.insertedId.toString()
      res
        .status(201)
        .json({ message: 'Added new comment', comment: newComment })
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' })
    }
  }

  client.close()
}

export default handler
