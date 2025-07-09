package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	tmpl := template.Must(template.ParseGlob("./views/**"))

	mux := http.NewServeMux()

	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "index.html", nil)
	})

	if err := http.ListenAndServe(":5000", mux); err != nil {
		log.Fatalf("failed starting http server: %v\n", err)
	}
}
