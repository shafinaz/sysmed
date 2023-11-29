migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  // remove
  collection.schema.removeField("srp1e1zs")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srp1e1zs",
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
})
