from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/api/transactions', methods=['GET', 'POST'])
def manage_transactions():
    if request.method == 'POST':
        data = request.json
        # Lưu giao dịch vào cơ sở dữ liệu
        return json.dumps({'status': 'Transaction recorded'}), 201
    else:
        # Trả danh sách giao dịch
        return json.dumps([])

if __name__ == '__main__':
    app.run(debug=True)