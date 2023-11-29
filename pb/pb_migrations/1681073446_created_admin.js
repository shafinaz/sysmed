migrate((db) => {
  const collection = new Collection({
    "id": "080nlx7jim56tjf",
    "created": "2023-04-09 20:50:46.974Z",
    "updated": "2023-04-09 20:50:46.974Z",
    "name": "admin",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y9eu2qsv",
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
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("080nlx7jim56tjf");

  return dao.deleteCollection(collection);
})
