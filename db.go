package main

import (
	"gopkg.in/mgo.v2"
)

var (
	Mongo *mgo.Session
)

func MongoConnect() {
	sess, err := mgo.Dial("mongodb://mongo/zyf")
	if err != nil {
		panic(err)
	}
	Mongo = sess
}
