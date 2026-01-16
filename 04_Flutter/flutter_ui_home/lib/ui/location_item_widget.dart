import 'package:flutter/material.dart';
import 'package:flutter_ui_home/shared/badge_custom_widget.dart';

class LocationItemWidget extends StatelessWidget {
  final String title;
  final double rating;
  final String urlImage;

  const LocationItemWidget({
    super.key,
    required this.title,
    required this.rating,
    required this.urlImage,
  });

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
              urlImage,
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
                  label: title,
                  icon: null,
                  iconColor: Colors.white,
                ),
                SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    BadgeCustomWidget(
                      width: 70,
                      label: rating.toString(),
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
