# Fatura

api's 


1 -
 create New Subscriber 
body 
{
    "tire":"Daily",
    "paymentMethod":"credit",
    "email":"email@email.com"
}
http://localhost:5000/user/api/new-subscriber

 2-create new Sletter 
 {
    "tire":"Monthly",
    "price":7
}
http://localhost:5000/admin/api/add-new-sletter
3- update new Sletter price 
body 
{
    "tire":"Daily",
    "price":25
}
method put
http://localhost:5000/admin/api/update-new-sletter




4 - 