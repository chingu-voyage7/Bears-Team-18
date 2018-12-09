package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/ping", PingHandler)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./../frontend/build")))

	handler := cors.Default().Handler(r)
	fmt.Println("App running at http://localhost:9090")
	log.Fatal(http.ListenAndServe("localhost:9090", handler))
}
