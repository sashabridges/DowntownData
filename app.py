import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

# The database URI
PWD = 'YOUR PWD HERE'
USR = 'YOUR USERNAME HERE'
SQLALCHEMY_DATABASE_URI = 'mysql://{}:{}@localhost:3306/crimez'.format(USR, PWD)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI

db = SQLAlchemy(app)

# This is the home route
@app.route('/')
def hello_world():
   return render_template("index.html")

# This is the first route
@app.route("/graph1")
def about():
    print("Server received request for 'Graph #1' page...")
    return "Welcome to the Graph #1 page!"  

# This is the second route	
@app.route("/graph2")
def about():
    print("Server received request for 'Graph #2' page...")
    return "Welcome to the Graph #2 page!"
	
# This is the third route
@app.route("/graph3")
def about():
    print("Server received request for 'Graph #3' page...")
    return "Welcome to the Graph #3 page!"

if __name__ == '__main__':
   app.run()