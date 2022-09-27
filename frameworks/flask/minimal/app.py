from flask import Flask, render_template

# Our Web Server Gateway Interface 
# Application name can be the the module or package name, so, that's why we used the dunder name here
app = Flask(__name__)

# The URL / triggers the function
@app.route("/")
@app.route("/home")
def hello_page():
    '''
    Returns html content
    '''

    return render_template('home.html')

@app.route("/about/<username>")
def about(username:str):
    '''
    Returns html content, which will be rendered by browser
    '''

    html = f'''
    <p>About page of {username}</p>
    '''

    return html