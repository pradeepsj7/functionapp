{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    },
    {
      "name": "bookmark",
      "direction": "in",
      "type": "cosmosDB",
      "connectionStringSetting": "your-database_DOCUMENTDB",
      "databaseName": "func-io-learn-db",
      "collectionName": "Bookmarks",
      "id": "{id}",
      "partitionKey": "{id}"
    }
  ]
}
