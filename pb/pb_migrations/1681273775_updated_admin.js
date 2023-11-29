migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4bs0fw88dpoevx")

  collection.createRule = "@request.auth.id = \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4bs0fw88dpoevx")

  collection.createRule = null

  return dao.saveCollection(collection)
})
