migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  collection.listRule = "username != \"\""
  collection.viewRule = "username != \"\""
  collection.createRule = "username != \"\""
  collection.updateRule = "username != \"\""
  collection.deleteRule = "username != \"\""
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": "username != \"\"",
    "minPasswordLength": 5,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aud5mnjlekfcf74")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 5,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
})
