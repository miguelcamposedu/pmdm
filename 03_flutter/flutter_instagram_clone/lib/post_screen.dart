import 'package:flutter/material.dart';

class PostScreen extends StatelessWidget {
  const PostScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
          child: Row(mainAxisAlignment: MainAxisAlignment.start, children: [
            CircleAvatar(
              backgroundImage: NetworkImage(
                  'https://avatars.githubusercontent.com/u/22224851?v=4'),
            ),
            Text(
              'brrrr1woman',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            Text('·'),
            Text('Follow'),
          ]),
        ),
        SizedBox(
          width: double.infinity,
          height: 300,
          child: Image.network(
            'https://media.istockphoto.com/id/1209988354/photo/young-man-skateboarding-in-los-angeles.jpg',
            fit: BoxFit.cover,
          ),
        ),
        const Row(
          children: [],
        ),
        const Row(
          children: [],
        ),
        const Row(
          children: [],
        ),
      ],
    );
  }
}
