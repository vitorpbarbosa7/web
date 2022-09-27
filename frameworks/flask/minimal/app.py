from flask import Flask

# Our Web Server Gateway Interface 
# Application name can be the the module or package name, so, that's why we used the dunder name here
app = Flask(__name__)

# The URL / triggers the function
@app.route("/")
def hello_world():
    '''
    Returns html content, which will be rendered by browser
    '''

    html = f'''
    <h1>Hello World</h1>
    '''

    return html

@app.route("/about")
def about():
    '''
    Returns html content, which will be rendered by browser
    '''

    html = f'''
    <p>About page</p>
    '''

    return html