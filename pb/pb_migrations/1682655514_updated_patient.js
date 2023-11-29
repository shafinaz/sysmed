migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfni4wq0",
    "name": "last_checkup",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lq7tfj5igv3laxr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  // remove
  collection.schema.removeField("bfni4wq0")

  return dao.saveCollection(collection)
})
