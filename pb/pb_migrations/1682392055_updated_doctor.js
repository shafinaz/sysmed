migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  // remove
  collection.schema.removeField("f6gjmaz6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d3ucjrh2",
    "name": "department",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Physiology",
        "Cardiology",
        "Outpatient",
        "Pathology",
        "Radiology"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  // add
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

  // remove
  collection.schema.removeField("d3ucjrh2")

  return dao.saveCollection(collection)
})
