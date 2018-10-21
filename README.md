# heady

# run app
1. go to the root directory
2. run command "npm install"
3. run command "npm start"

# add category api
url: 
localhost:3000/category

method:
post

request: 
{
	{
    	"name": "category_one"
    }
}

response:
{
    "data": null,
    "message": "Category saved successfully",
    "code": 200
}

# update category api
url:
localhost:3000/category/5bcc3faebfa3b81bb4abf0e0

method:
put

request:
{
	"categoryList": [
		"5bcc3fb7bfa3b81bb4abf0e1"
	]
}

response:
{
    "data": null,
    "message": "Category updated successfully",
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
            "name": "category_one",
            "categoryList": [
                {
                    "name": "category_two",
                    "categoryList": [],
                    "addedOn": 1540112311140,
                    "modifiedOn": 1540112311140,
                    "isActive": 1,
                    "isDeleted": 0,
                    "_id": "5bcc3fb7bfa3b81bb4abf0e1",
                    "__v": 0
                }
            ],
            "addedOn": 1540112302491,
            "modifiedOn": 1540112350359,
            "isActive": 1,
            "isDeleted": 0,
            "_id": "5bcc3faebfa3b81bb4abf0e0",
            "__v": 0
        },
        {
            "name": "category_two",
            "categoryList": [],
            "addedOn": 1540112311140,
            "modifiedOn": 1540112311140,
            "isActive": 1,
            "isDeleted": 0,
            "_id": "5bcc3fb7bfa3b81bb4abf0e1",
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
	"name": "product_one",
	"price": 10,
	"categoryList": [
		"5bcc3faebfa3b81bb4abf0e0"
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
localhost:3000/category/5bcc3faebfa3b81bb4abf0e0/product/list

method:
get

response:
{
    "data": [
        {
            "name": "product_one",
            "price": "10",
            "categoryList": [
                {
                    "name": "category_one",
                    "categoryList": [
                        "5bcc3fb7bfa3b81bb4abf0e1"
                    ],
                    "addedOn": 1540112302491,
                    "modifiedOn": 1540112350359,
                    "isActive": 1,
                    "isDeleted": 0,
                    "_id": "5bcc3faebfa3b81bb4abf0e0",
                    "__v": 0
                }
            ],
            "addedOn": 1540112414116,
            "modifiedOn": 1540112483264,
            "isActive": 1,
            "isDeleted": 0,
            "_id": "5bcc401ebfa3b81bb4abf0e2",
            "__v": 0
        }
    ],
    "message": "Product list fetched successfully",
    "code": 200
}

# update product
url:
localhost:3000/product/5bcc401ebfa3b81bb4abf0e2

method:
put

request:
{
	"price": 20
}

response:
{
    "data": null,
    "message": "Product updated successfully",
    "code": 200
}
