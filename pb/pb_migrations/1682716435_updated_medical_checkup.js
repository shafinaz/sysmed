migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  collection.createRule = "doctors_comment != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  collection.createRule = null

  return dao.saveCollection(collection)
})
