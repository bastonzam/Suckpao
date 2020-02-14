package com.nattapon.appsuckpao.Data

class Order(val orderid:String,
            val num:String,
            val laundry:String,
            val store:String,
            val status:String,
            val place:String,
            val detail:String,
            val price:String,
            val userid:String){
    constructor():this("","","","","","","","","")
}