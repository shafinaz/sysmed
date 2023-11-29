migrate((db) => {
  const collection = new Collection({
    "id": "fa5w3wbe2l9rycq",
    "created": "2023-04-24 01:59:42.622Z",
    "updated": "2023-04-24 01:59:42.622Z",
    "name": "news_admin",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xnyw7n0s",
        "name": "date",
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
        "id": "ikvq3gh8",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("fa5w3wbe2l9rycq");

  return dao.deleteCollection(collection);
})
