import 'package:flutter/material.dart';
import 'package:flutter_ui_home/ui/location_item_widget.dart';

class HomePageView extends StatelessWidget {
  HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('World Locations')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.search),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Popular', style: TextStyle(fontSize: 24)),
            SizedBox(height: 16),
            LocationItemWidget(
              title: 'Sevilla',
              rating: 4.5,
              urlImage:
                  'https://upload.wikimedia.org/wikipedia/commons/7/79/Giralda_Sevilla.jpg',
            ),
          ],
        ),
      ),
    );
  }
}
