import 'package:flutter/material.dart';
import 'package:flutter_navigation_screens/ui/first_page_view.dart';
import 'package:flutter_navigation_screens/ui/second_page_view.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const FirstPageView(),
        '/second': (context) => const SecondPageView(),
      },
    );
  }
}
