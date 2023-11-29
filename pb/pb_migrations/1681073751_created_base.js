migrate((db) => {
  const collection = new Collection({
    "id": "52jpreg7t1e6qbt",
    "created": "2023-04-09 20:55:51.283Z",
    "updated": "2023-04-09 20:55:51.283Z",
    "name": "base",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt");

  return dao.deleteCollection(collection);
})
