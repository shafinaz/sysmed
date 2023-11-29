migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jpcivabb",
    "name": "test",
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

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // remove
  collection.schema.removeField("jpcivabb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y5mfkbxz",
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
