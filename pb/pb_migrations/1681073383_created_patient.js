migrate((db) => {
  const collection = new Collection({
    "id": "aud5mnjlekfcf74",
    "created": "2023-04-09 20:49:43.690Z",
    "updated": "2023-04-09 20:49:43.690Z",
    "name": "patient",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sxodri6f",
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
      "allowEmailAuth": false,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": false,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 0,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74");

  return dao.deleteCollection(collection);
})
