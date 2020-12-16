import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
#80번 포트에 연결 / 소켓 연결
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
#encode > 사용하는 게 유니코드므로 변환시켜줌 , 가져오려는 자료 romeo txt
# 나는 이 자료를 요청한다.
mysock.send(cmd)
# 보내줄래?
while True:
    data = mysock.recv(512)
    # 512만큼의 자료
    if len(data) < 1:
        # 1보다 작아지면, 받는 자료가 없어지면 멈춤
        break
    print(data.decode(),end='')
mysock.close()
