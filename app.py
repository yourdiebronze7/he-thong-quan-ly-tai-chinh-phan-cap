from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/api/transactions', methods=['GET', 'POST'])
def manage_transactions():
    if request.method == 'POST':
        data = request.get_json()  # Use get_json() to parse request data
        # Save transaction to the database
        return jsonify({'message': 'Transaction recorded', 'data': data}), 201
    else:
        # Return list of transactions
        return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)