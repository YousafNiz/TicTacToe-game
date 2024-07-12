import 'package:tictactoe/resources/socket_client.dart';

class SocketMethods {
  final _socketClient = SocketClient.instance.socket!;

  void createRoom(String nickName) {
    if (nickName.isNotEmpty) {
      _socketClient.emit('createRoom', {
        'nickName': nickName,
      });
    }
  }
}
