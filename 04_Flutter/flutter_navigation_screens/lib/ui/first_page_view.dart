import 'package:flutter/material.dart';
import 'package:flutter_navigation_screens/ui/second_page_view.dart';

class FirstPageView extends StatelessWidget {
  const FirstPageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("First Page")),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute<void>(
                    builder: (context) => const SecondPageView(),
                  ),
                );
              },
              child: Text("Go to Second Page (push)"),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushReplacement(
                  MaterialPageRoute<void>(
                    builder: (context) => const SecondPageView(),
                  ),
                );
              },
              child: Text("Go to Second Page (push with replacement)"),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/second');
              },
              child: Text("Go to Second Page (named)"),
            ),
          ],
        ),
      ),
    );
  }
}
