migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ri64kqkf",
    "name": "doctor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8q2gdng6p4vzr1f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ri64kqkf",
    "name": "doctor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8q2gdng6p4vzr1f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
