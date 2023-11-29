migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  collection.createRule = "@request.auth.id = \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  collection.createRule = null

  return dao.saveCollection(collection)
})
