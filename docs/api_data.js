define({ "api": [  {    "type": "get",    "url": "/public/proberesults/bssid/:bssid",    "title": "Get probe result",    "version": "1.0.0",    "name": "GetProbeResult",    "group": "ProbeResult",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "x-api-key",            "description": "<p>API Key</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Accept",            "description": "<p>application/json.</p>"          }        ]      },      "examples": [        {          "title": "Header-Example:",          "content": "{\n  \"x-api-key\": \"thisisapikey\",\n  \"Accept\": \"application/json\"\n}",          "type": "json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bssid",            "description": "<p>BSSID of the probe result.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the probe result.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "ssid",            "description": "<p>SSID of the probe result.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "bssid",            "description": "<p>BSSID of the probe result.</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "isBoingo",            "description": "<p>True if the probe is Boingo network, false otherwise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Created datetime of the probe result.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "lastModified",            "description": "<p>Last modified datetime of the probe result.</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "cached",            "description": "<p>True if the probe result is from cache server, false otherwise.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 15,\n    \"ssid\": \"LAX\",\n    \"bssid\": \"11:22:33:44:55:66\",\n    \"isBoingo\": true,\n    \"createdAt\": \"2019-11-14T00:37:52.183Z\",\n    \"lastModified\": \"2019-11-14T00:37:52.183Z\",\n    \"cached\": true\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NotFound",            "description": "<p>The probe result of the BSSID was not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found",          "type": "json"        }      ]    },    "filename": "src/api/public/proberesults/routes.js",    "groupTitle": "ProbeResult"  },  {    "type": "post",    "url": "/public/proberesults/bssid/",    "title": "Post probe result",    "version": "1.0.0",    "name": "PostProbeResult",    "group": "ProbeResult",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authentication token from Boingo API.</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>application/json.</p>"          }        ]      },      "examples": [        {          "title": "Header-Example:",          "content": "{\n  \"Authorization\": \"Bearer thisistoken\",\n  \"Content-Type\": \"application/json\"\n}",          "type": "json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "ssid",            "description": "<p>SSID of the probe result.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bssid",            "description": "<p>BSSID of the probe result.</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": false,            "field": "isBoingo",            "description": "<p>True if the probe is Boingo network, false otherwise.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "customerId",            "description": "<p>User's Boingo customer ID.</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"ssid\": \"LAX\",\n  \"bssid\": \"11:22:33:44:55:66\",\n  \"isBoingo\": true,\n  \"customerId\": \"123456\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the probe result.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "ssid",            "description": "<p>SSID of the probe result.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "bssid",            "description": "<p>BSSID of the probe result.</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "isBoingo",            "description": "<p>True if the probe is Boingo network, false otherwise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Created datetime of the probe result.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "lastModified",            "description": "<p>Last modified datetime of the probe result.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 15,\n    \"ssid\": \"LAX\",\n    \"bssid\": \"11:22:33:44:55:66\",\n    \"isBoingo\": true,\n    \"createdAt\": \"2019-11-14T00:37:52.183Z\",\n    \"lastModified\": \"2019-11-14T00:37:52.183Z\",\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The probe result JSON was not in correct format.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request",          "type": "json"        }      ]    },    "filename": "src/api/public/proberesults/routes.js",    "groupTitle": "ProbeResult"  }] });
