Vault Key
A version controlled key-value store.

It is hosted on https://vaultkey.herokuapp.com

Sample 1

Method: POST

Endpoint: /vault/object

Body: The content type shoul be application/json. The parameter to send the key-value is json

Request: {
	"json":{
		"mykey": 10
	}
}

Response: {
    "message": "SUCCESS",
    "statusCode": 200,
    "data": {
        "key": "mykey",
        "value": 10,
        "timestamp": 1526023709367
    }
}


Sample 2

Method: GET

Endpoint: /vault/object/mykey

Response: {"message":"SUCCESS","statusCode":200,"data":{"value":10}}


Sample 3

METHOD: GET

Endpoint: /vault/object/mykey?timestamp=1525960905971

Response: {"message":"SUCCESS","statusCode":200,"data":{"value":1}}


Sample 4

METHOD: GET 

Endpoint: /vault/object/mykey?timestamp=1440568980 

Response: {"message":"SUCCESS","statusCode":200,"data":{}}



