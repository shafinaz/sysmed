migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // remove
  collection.schema.removeField("y5mfkbxz")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y5mfkbxz",
    "name": "patient_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("9gujr8pk")

  return dao.saveCollection(collection)
})
