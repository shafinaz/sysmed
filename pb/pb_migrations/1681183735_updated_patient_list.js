migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9gujr8pk",
    "name": "patient_name",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "aud5mnjlekfcf74",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9gujr8pk",
    "name": "patient_name",
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
