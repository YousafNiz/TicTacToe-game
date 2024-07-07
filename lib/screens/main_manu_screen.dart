import 'package:flutter/material.dart';
import 'package:tictactoe/responsive/responsive.dart';
import 'package:tictactoe/widgets/custom_buttons.dart';

class MainManuScreen extends StatelessWidget {
  const MainManuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Responsive(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomButtons(
              onTap: () {},
              text: 'Create Room',
            ),
            const SizedBox(height: 20),
            CustomButtons(
              onTap: () {},
              text: 'Join Room',
            ),
          ],
        ),
      ),
    );
  }
}
