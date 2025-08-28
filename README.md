# Code names web application

This app is meant to provide some help in the game "Code names".

The goal is to leverage IA to make senseful proposition when trying to think of a code name.

## Usage

### Requirements

To run this app, you'll need installed:

- `Python`: you can dowload it [here](https://www.python.org/downloads/) (version used: 3.13.5).
- `Node.js`: you can download it [here](https://nodejs.org/en/download/) (version used: 22.18.0).

### Run the app

- Install Python requirements

From the `root` directory:

```bash
pip3 install -r requirements.txt
```

- Start backend server

From the `backend` directory:

```bash
$ python3 main.py
 * Serving Flask app 'config'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 363-248-773
```

- Start frontend server

From the `frontend` directory:

```bash
$ npm run dev
> frontend@0.0.0 dev
> vite


  VITE v7.1.3  ready in 576 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Use the app

- Cmd+click on the Local address from the frontend to open the page in your browser.
- Enter some words in the blank fields and press Enter/the button to get a code name.
