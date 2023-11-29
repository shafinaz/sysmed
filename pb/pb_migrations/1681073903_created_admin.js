migrate((db) => {
  const collection = new Collection({
    "id": "g4bs0fw88dpoevx",
    "created": "2023-04-09 20:58:23.530Z",
    "updated": "2023-04-09 20:58:23.530Z",
    "name": "admin",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6cyrhjko",
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
  const collection = dao.findCollectionByNameOrId("g4bs0fw88dpoevx");

  return dao.deleteCollection(collection);
})
