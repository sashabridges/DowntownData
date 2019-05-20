import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

# The database URI
#PWD = 'YOUR PWD HERE'
#USR = 'YOUR USERNAME HERE'
#SQLALCHEMY_DATABASE_URI = 'mysql://{}:{}@localhost:3306/crimez'.format(USR, PWD)
#app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI

#db = SQLAlchemy(app)

def get_data():
	crime_data = pd.read_csv('..', 'category_2014.csv')
	return Counter(crime_data)

# This is the home route
@app.route('/')
def index():
	data = get_data()
	return jsonify(data)

# This is the flask route
# on the home page it shows a pie chart
# where it displays all the counts of crimes in 2014-2018

# @app.route("/flask_graph")
# def about():
	# print("Server received request for Flask page...")
	# data = get_data()
	# return jsonify(data)


if __name__ == '__main__':
   app.run()