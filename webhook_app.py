from flask import Flask, request, jsonify
import os
import subprocess

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        try:
            # 拉取最新代码
            result = subprocess.run(['git', 'pull'])
            if result.returncode == 0:
                return jsonify({'message': 'Pull successful', 'output': result.stdout}), 200
            else:
                return jsonify({'message': 'Pull failed', 'error': result.stderr}), 500
        except Exception as e:
            return jsonify({'message': 'Exception occurred', 'error': str(e)}), 500
    return jsonify({'message': 'Invalid request'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
