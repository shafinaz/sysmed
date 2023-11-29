migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.listRule = "@request.data.content != \"\""
  collection.viewRule = "@request.data.content != \"\""
  collection.createRule = "@request.data.content != \"\""
  collection.updateRule = "@request.data.content != \"\""
  collection.deleteRule = "@request.data.content != \"\""

  // remove
  collection.schema.removeField("k3cwdfep")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

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
})
