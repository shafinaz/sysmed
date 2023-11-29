migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xr47f9jntsqmh3f");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "xr47f9jntsqmh3f",
    "created": "2023-04-11 03:31:09.462Z",
    "updated": "2023-04-11 03:31:09.462Z",
    "name": "news",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pezbmymu",
        "name": "article",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tmmcnhe7",
        "name": "data_published",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
})
