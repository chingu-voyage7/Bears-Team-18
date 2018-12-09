package main

import "net/http"

//PingHandler reply with pong!
func PingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("pong!\n"))
}
