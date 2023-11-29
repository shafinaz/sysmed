migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctnjyqzl",
    "name": "role",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
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

  // update
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
})
