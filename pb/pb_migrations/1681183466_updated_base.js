migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  collection.name = "patient_list"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  collection.name = "base"

  return dao.saveCollection(collection)
})
