migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
