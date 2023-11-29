migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6gjmaz6",
    "name": "department",
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
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6gjmaz6",
    "name": "random",
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
})
