import 'package:flutter/material.dart';
import 'package:tictactoe/screens/create_room_screen.dart';
import 'package:tictactoe/screens/join_room_screen.dart';
import 'package:tictactoe/screens/main_manu_screen.dart';
import 'package:tictactoe/utils/colors.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: backGroupColor,
      ),
      routes: {
        MainManuScreen.routeName: (context) => const MainManuScreen(),
        CreateRoomScreen.routeName: (context) => const MainManuScreen(),
        JoinRoomScreen.routeName: (context) => const MainManuScreen(),
      },
      home: const MainManuScreen(),
    );
  }
}
