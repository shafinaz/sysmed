migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.name = "news"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.name = "news_admin"

  return dao.saveCollection(collection)
})
