migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // remove
  collection.schema.removeField("da73c678")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "da73c678",
    "name": "test",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "52jpreg7t1e6qbt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
