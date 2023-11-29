migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("52jpreg7t1e6qbt");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "52jpreg7t1e6qbt",
    "created": "2023-04-09 20:55:51.283Z",
    "updated": "2023-04-11 14:19:37.430Z",
    "name": "patient_list",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "9gujr8pk",
        "name": "patient_name",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "aud5mnjlekfcf74",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\"",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\"",
    "deleteRule": "@request.auth.id != \"\"",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
