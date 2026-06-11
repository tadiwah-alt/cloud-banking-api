from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

def get_connection():
    return psycopg2.connect(
        host="db",
        database=os.environ['POSTGRES_DB'],
        user=os.environ['POSTGRES_USER'],
        password=os.environ['POSTGRES_PASSWORD']
    )

@app.route("/")
def home():
    return "Mini Banking API Running"

@app.route("/accounts")
def accounts():

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT * FROM accounts;")

    rows = cur.fetchall()

    cur.close()
    conn.close()

    results = []

    for row in rows:
        results.append({
            "id": row[0],
            "name": row[1],
            "balance": row[2]
        })

    return jsonify(results)

@app.route("/balance/<id>")
def balance(id):

    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "SELECT balance FROM accounts WHERE id = %s;",
        (id,)
    )

    row = cur.fetchone()

    cur.close()
    conn.close()

    return jsonify({
        "account_id": id,
        "balance": row[0]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)