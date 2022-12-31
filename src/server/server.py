from flask import Flask

app= Flask(__name__)

@app.route("/members")
def memebers():
  return {"members":["member1","member2","member3"]}


if __name__ == "__main__":
  app.run(debug=True)