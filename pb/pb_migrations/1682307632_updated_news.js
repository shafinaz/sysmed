migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.listRule = "status = \"active\""
  collection.viewRule = "status = \"active\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
