migrate((db) => {
  const collection = new Collection({
    "id": "lq7tfj5igv3laxr",
    "created": "2023-04-11 03:33:00.753Z",
    "updated": "2023-04-11 03:33:00.753Z",
    "name": "medical_checkup",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i5k9arob",
        "name": "date_of_checkup",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "gbcsms3t",
        "name": "doctors_comment",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "da73c678",
        "name": "test",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "52jpreg7t1e6qbt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("lq7tfj5igv3laxr");

  return dao.deleteCollection(collection);
})
