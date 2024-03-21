from flask import Flask
import socket

hostname=socket.gethostname()
IPAddr=socket.gethostbyname(hostname)

app = Flask(__name__)

@app.route('/')
def hello():
    return 'My current ip address is {}\n'.format(IPAddr)