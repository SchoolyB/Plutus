from flask import Flask

app= Flask(__name__)

@app.route("/Signup")
def signup():
  return 

@app.route("/Login")
def login():
  return 

@app.route("/Account")
def account():
  return 

if __name__ == "__main__":
  app.run(debug=True)