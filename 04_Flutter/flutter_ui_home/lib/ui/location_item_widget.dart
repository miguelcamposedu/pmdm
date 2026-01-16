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
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: Image.network(
              'https://upload.wikimedia.org/wikipedia/commons/7/79/Giralda_Sevilla.jpg',
              fit: BoxFit.cover,
              width: double.infinity,
              height: double.infinity,
              colorBlendMode: BlendMode.darken,
              color: Colors.black.withValues(alpha: 0.3),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                BadgeCustomWidget(
                  width: 100,
                  label: 'Sevilla',
                  icon: null,
                  iconColor: Colors.white,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    BadgeCustomWidget(
                      width: 100,
                      label: 'Sevilla',
                      icon: Icons.star,
                      iconColor: Colors.yellow,
                    ),
                    SizedBox(
                      width: 30,
                      height: 30,
                      child: FloatingActionButton(
                        backgroundColor: Colors.white,
                        onPressed: null,
                        child: const Icon(
                          Icons.favorite,
                          size: 15,
                          color: Colors.red,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
