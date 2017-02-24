# Hapi-Boilerplate
Boilerplate Hapi used for the TP of the LP and now customized by Kévin DESSIMOULIE to be a user manager with a connection.

# Launch It

```
nodejs server.js
```

**Attention** : The value of `NODE_ENV` can change the configuration of the server.

Nox you got a socket.io server listening on :

```
http://127.0.0.1:1254
```

# Project's Structure

```
Hapi-boilerplate
├── app                         # App folder
│   ├── endpoints               # Routes
│   ├── handlers                # Handlers
│   └── handlers.js             # File loading the handlers
├── config                      # Config folder
│   ├── environments            # Environments folder
│   │   ├── all.js              # Common variables + environment ones
│   │   ├── development.js      # Dev variables
│   │   ├── local.js            # Local variables
│   │   └── production.js       # Production variables
│   ├── manifest                # Folder containing manifests configurations
│   │   ├── plugins.js          # Loads project's and system plugins
│   │   ├── routes.js           # Loads the routes
│   │   └── server.js           # Serveur configurations
│   └── manifest.js             # Composing final manifest to initialise Hapi
├── node_modules                # Folder with all external libraries recovered by NPM
├── package.json                # Project's dependencies
├── readme.md                   # The file you are reading
└── server.js                   # Project's launching file
```