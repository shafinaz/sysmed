migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  collection.listRule = "status = \"active\""
  collection.viewRule = "status = \"active\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
