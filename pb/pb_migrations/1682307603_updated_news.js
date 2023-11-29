migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3cwdfep",
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
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  // remove
  collection.schema.removeField("k3cwdfep")

  return dao.saveCollection(collection)
})
