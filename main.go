package main

import (
	"github.com/bmizerany/pat"
	"net/http"
)

func main() {
	MongoConnect()
	defer Mongo.Close()
	m := pat.New()
	m.Get("/article", http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("233"))
	}))
	http.ListenAndServe(":8080", m)
}
