import 'package:flutter/material.dart';
import 'package:tictactoe/responsive/responsive.dart';
import 'package:tictactoe/screens/create_room_screen.dart';
import 'package:tictactoe/widgets/custom_buttons.dart';

class MainManuScreen extends StatelessWidget {
  static String routeName = '/main-manu';

  void creatRoom(BuildContext context) {
    Navigator.pushNamed(context, CreateRoomScreen.routeName);
  }

  void joinRoom(BuildContext context) {
    Navigator.pushNamed(context, CreateRoomScreen.routeName);
  }

  const MainManuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Responsive(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomButtons(
              onTap: () => creatRoom(context),
              text: 'Create Room',
            ),
            const SizedBox(height: 20),
            CustomButtons(
              onTap: () => joinRoom(context),
              text: 'Join Room',
            ),
          ],
        ),
      ),
    );
  }
}
