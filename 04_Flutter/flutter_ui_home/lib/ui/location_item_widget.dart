import 'package:flutter/material.dart';
import 'package:flutter_ui_home/shared/badge_custom_widget.dart';

class LocationItemWidget extends StatelessWidget {
  const LocationItemWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 300,
      width: 200,
      child: Stack(
        children: [
          Image.network(
            'https://upload.wikimedia.org/wikipedia/commons/7/79/Giralda_Sevilla.jpg',
            fit: BoxFit.cover,
          ),
          Column(
            children: [
              Positioned(
                bottom: 10,
                child: BadgeCustomWidget(
                  width: 100,
                  label: 'Sevilla',
                  icon: null,
                  iconColor: Colors.white,
                ),
              ),
              Positioned(
                bottom: 0,
                child: Row(
                  children: [
                    BadgeCustomWidget(
                      width: 150,
                      label: 'Sevilla',
                      icon: Icons.star,
                      iconColor: Colors.yellow,
                    ),
                    FloatingActionButton(
                      onPressed: null,
                      child: const Icon(Icons.favorite),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
