import 'package:flutter/material.dart';

class GoogleMeetPersonWidget extends StatelessWidget {
  const GoogleMeetPersonWidget({
    super.key,
    required this.bgColor,
    required this.micOn,
    required this.avatarUrl,
    required this.userName,
  });

  final Color bgColor;
  final bool micOn;
  final String avatarUrl;
  final String userName;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 100,
      height: 150,
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Align(
              alignment: Alignment.topRight,
              child: Stack(
                children: [
                  Container(
                    width: 24,
                    height: 24,
                    decoration: BoxDecoration(
                      color: Color.fromARGB(77, 0, 0, 0),
                      borderRadius: BorderRadius.circular(100),
                    ),
                  ),
                  Icon(micOn ? Icons.mic : Icons.mic_off, color: Colors.white),
                ],
              ),
            ),
            CircleAvatar(
              backgroundImage: avatarUrl.isNotEmpty
                  ? NetworkImage(avatarUrl)
                  : null,
              radius: 30,
              child: avatarUrl.isEmpty
                  ? const Icon(Icons.person, size: 30)
                  : null,
            ),
            const SizedBox(height: 8),
            Text(userName, style: const TextStyle(color: Colors.white)),
            const SizedBox(height: 8),

            const SizedBox(height: 8),
          ],
        ),
      ),
    );
  }
}
