migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6kn90ar",
    "name": "status",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // remove
  collection.schema.removeField("g6kn90ar")

  return dao.saveCollection(collection)
})
