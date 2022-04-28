import { MongoClient } from 'mongodb'

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://nasko1234:CofSZYU4j9WCOLeW@database.4k16k.mongodb.net/tours?retryWrites=true&w=majority'
  )

  return client
}

export async function insertDocument(client, collection, document) {
  const db = client.db()

  const result = await db.collection(collection).insertOne(document)

  return result
}
