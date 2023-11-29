migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkxfiskl",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr")

  // remove
  collection.schema.removeField("wkxfiskl")

  return dao.saveCollection(collection)
})
