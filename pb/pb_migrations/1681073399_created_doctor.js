migrate((db) => {
  const collection = new Collection({
    "id": "8q2gdng6p4vzr1f",
    "created": "2023-04-09 20:49:59.004Z",
    "updated": "2023-04-09 20:49:59.004Z",
    "name": "doctor",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f6gjmaz6",
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
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f");

  return dao.deleteCollection(collection);
})
