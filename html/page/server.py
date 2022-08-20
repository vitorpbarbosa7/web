from flask import Flask, render_template
import os
import subprocess

app = Flask(__name__)

@app.route('/', methods = ['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/kedro-run/')
def my_link():

    msg = 'Pipeline Execution started'
    current_directory = os.getcwd()
    subprocess.run(["entrypoint.sh"])
    return current_directory

if __name__ == '__main__':
    app.run(debug=True)