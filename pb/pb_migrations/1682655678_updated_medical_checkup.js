migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yx3kwxgm",
    "name": "patient",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "aud5mnjlekfcf74",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "last_checkup"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yx3kwxgm",
    "name": "patient",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "aud5mnjlekfcf74",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
