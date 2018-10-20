# heady

# run application
1. Go to the root directory
2. run command "npm install"
3. run command "npm start"

# add category api
url: 
localhost:3000/category

method:
post

request: 
{
	"name": "parent category",
	"categoryList": [
		"5bcb8cdbae458214bc8eac40"
	]
}

response::
{
    "data": null,
    "message": "Category saved successfully",
    "code": 200
}

# get category list api
url:
localhost:3000/category/list

method:
get

response:
{
    "data": [
        {
            "name": "child category",
            "categoryList": [],
            "addedOn": 1540066523572,
            "modifiedOn": 1540066523573,
            "isActive": 1,
            "isDeleted": 0,
            "_id": "5bcb8cdbae458214bc8eac40",
            "__v": 0
        },
        {
            "name": "parent category",
            "categoryList": [
                {
                    "name": "child category",
                    "categoryList": [],
                    "addedOn": 1540066523572,
                    "modifiedOn": 1540066523573,
                    "isActive": 1,
                    "isDeleted": 0,
                    "_id": "5bcb8cdbae458214bc8eac40",
                    "__v": 0
                }
            ],
            "addedOn": 1540066562457,
            "modifiedOn": 1540066562457,
            "isActive": 1,
            "isDeleted": 0,
            "_id": "5bcb8d02ae458214bc8eac41",
            "__v": 0
        }
    ],
    "message": "Category list fetched successfully",
    "code": 200
}

# add product api
url:
localhost:3000/product

method:
post

request:
{
	"name": "product",
	"price": 20,
	"categoryList": [
		"5bcb8d02ae458214bc8eac41"
	]
}

response:
{
    "data": null,
    "message": "Product saved successfully",
    "code": 200
}

# get product list api
url:
localhost:3000/category/5bcb8d02ae458214bc8eac41/product/list

method:
get

response:
{
    "data": [
        {
            "name": "product",
            "price": "10",
            "categoryList": [
                {
                    "name": "parent category",
                    "categoryList": [
                        "5bcb8cdbae458214bc8eac40"
                    ],
                    "addedOn": 1540066562457,
                    "modifiedOn": 1540066562457,
                    "isActive": 1,
                    "isDeleted": 0,
                    "_id": "5bcb8d02ae458214bc8eac41",
                    "__v": 0
                }
            ],
            "addedOn": 1540066611204,
            "modifiedOn": 1540066670551,
            "isActive": 1,
            "isDeleted": 0,
            "_id": "5bcb8d33ae458214bc8eac42",
            "__v": 0
        }
    ],
    "message": "Product list fetched successfully",
    "code": 200
}

# update product
url:
localhost:3000/product/5bcb8d33ae458214bc8eac42

method:
put

request:
{
	"name": "product",
	"price": 10
}

response:
{
    "data": null,
    "message": "Product updated successfully",
    "code": 200
}
