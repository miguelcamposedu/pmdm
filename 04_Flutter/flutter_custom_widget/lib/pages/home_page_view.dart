import 'package:flutter/material.dart';
import 'package:flutter_custom_widget/shared/google_meet_person_widget.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home Page')),
      body: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          GoogleMeetPersonWidget(
            bgColor: Colors.purple,
            micOn: false,
            avatarUrl: "",
            userName: "Miguel",
          ),
          SizedBox(width: 8),
          GoogleMeetPersonWidget(
            bgColor: Colors.blue,
            micOn: true,
            avatarUrl: "",
            userName: "Nayat",
          ),
          SizedBox(width: 8),
          GoogleMeetPersonWidget(
            bgColor: Colors.green,
            micOn: false,
            avatarUrl: "",
            userName: "Adrián",
          ),
        ],
      ),
    );
  }
}
