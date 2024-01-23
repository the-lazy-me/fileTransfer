import os
from urllib.parse import quote, unquote

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)

# 设置文件上传目录
app.config['UPLOAD_FOLDER'] = 'uploads'
# 允许上传的文件类型
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif','mp3','mp4', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip',
                      '7z', 'rar'}
# 设置跨域
CORS(app)


# 6位随机字符生成，包括数字和字母
def random_str():
    import random
    import string
    str = ''.join(random.sample(string.ascii_letters + string.digits, 6))
    return str


# 保存字符串到文件，用于记录，防止重复
def save_str(str):
    with open('record.txt', 'a+') as f:
        f.write(str + '\n')
        f.close()


# print(random_str())

# 检查文件类型是否允许
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# 处理多文件上传请求
@app.route('/upload', methods=['POST'])
def upload_files():
    # print(request.files)
    # 检查请求是否包含文件
    if 'files' not in request.files:
        return jsonify({'error': 'No files provided'}), 400

    files = request.files.getlist('files')

    # 调用random_str()函数生成随机字符，如果重复则重新生成
    while True:
        random_path = random_str()
        if random_path not in open('str.txt').read():
            break

    # 调用save_str()函数保存随机字符
    save_str(random_path)
    # transferCode = random_str()

    # 创建保存文件的目录
    os.mkdir(f"{app.config['UPLOAD_FOLDER']}/{random_path}")

    for file in files:
        # 检查文件名和文件类型
        if file.filename == '' or not allowed_file(file.filename):
            return jsonify({'error': 'Invalid file'}), 400
        # 设置保存文件的路径
        save_path = f"{app.config['UPLOAD_FOLDER']}/{random_path}"

        # 保存文件到上传目录
        file.save(f"{save_path}/{file.filename}")

        # 去除文件保存路径中的uploads
        transferCode = save_path[8:]

    # 返回上传成功的信息，包括文件的保存路径
    return jsonify({'msg': 'Upload success', 'transferCode': transferCode}), 200


# 处理文件下载请求
# 返回文件下载链接
@app.route('/download/<transferCode>', methods=['GET'])
def get_download_info(transferCode):
    # 构建文件保存路径
    file_path = f"{app.config['UPLOAD_FOLDER']}/{transferCode}"

    # 检查文件夹是否存在
    if not os.path.exists(file_path):
        return jsonify({'error': 'Invalid transferCode'}), 404

    # 获取文件列表
    files = os.listdir(file_path)

    # 检查文件列表是否为空
    if not files:
        return jsonify({'error': 'No files found for the given transferCode'}), 404

    # 获取第一个文件的路径
    file_to_download = f"{file_path}/{files[0]}"

    # 获取文件名
    filename = files[0]

    # 将文件名进行URL编码，以支持中文
    encoded_filename = quote(filename)

    # 构建文件下载链接
    download_link = f"/download-file/{transferCode}/{encoded_filename}"

    # 返回文件路径和文件名
    return jsonify({'file_path': file_to_download, 'filename': encoded_filename, 'download_link': download_link})

# 返回文件
@app.route('/download-file/<transferCode>/<filename>', methods=['GET'])
def download_file(transferCode, filename):
    #filename进行URL解码，以支持中文，空格等
    filename = unquote(filename)

    # print(filename)

    # 构建文件保存路径
    file_path = f"{app.config['UPLOAD_FOLDER']}/{transferCode}"

    # 检查文件夹是否存在
    if not os.path.exists(file_path):
        return jsonify({'error': 'Invalid transferCode'}), 404

    # 获取文件列表
    files = os.listdir(file_path)

    # 检查文件列表是否为空
    if not files:
        return jsonify({'error': 'No files found for the given transferCode'}), 404

    # 获取第一个文件的路径
    file_to_download = f"{file_path}/{filename}"

    # 检查文件是否存在
    if not os.path.exists(file_to_download):
        return jsonify({'error': 'Invalid filename'}), 404

    #设置响应头为附件类型
    response = send_file(file_to_download, as_attachment=True)

    #返回文件

    return response


if __name__ == '__main__':
    # 启动Flask应用，监听在端口5000
    app.run(debug=True, port=5000)
