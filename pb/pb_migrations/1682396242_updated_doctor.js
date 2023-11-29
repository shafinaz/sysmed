migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  collection.listRule = "department = \"Physiology\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  collection.listRule = null

  return dao.saveCollection(collection)
})
