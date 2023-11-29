migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctnjyqzl",
    "name": "role",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "doctor",
        "patient"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  // remove
  collection.schema.removeField("ctnjyqzl")

  return dao.saveCollection(collection)
})
