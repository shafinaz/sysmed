migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

  collection.listRule = "@request.auth.id = \"\""
  collection.viewRule = "@request.auth.id = \"\""
  collection.createRule = "@request.auth.id = \"\""
  collection.updateRule = "@request.auth.id = \"\""
  collection.deleteRule = "@request.auth.id = \"\""
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": "@request.auth.id = \"\"",
    "minPasswordLength": 8,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q2gdng6p4vzr1f")

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
    "minPasswordLength": 8,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
})
