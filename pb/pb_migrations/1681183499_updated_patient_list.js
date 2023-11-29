migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iohwm3xq",
    "name": "last_visit",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jpcivabb",
    "name": "doctor_name",
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
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt")

  // remove
  collection.schema.removeField("iohwm3xq")

  // update
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

  return dao.saveCollection(collection)
})
