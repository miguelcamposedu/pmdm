import 'package:flutter/material.dart';
import 'package:flutter_ui_home/shared/badge_custom_widget.dart';

class LocationTitleItemWidget extends StatelessWidget {
  final String cityName;
  final String urlCityImage;
  const LocationTitleItemWidget({
    super.key,
    required this.cityName,
    required this.urlCityImage,
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
              urlCityImage,
              fit: BoxFit.cover,
              width: double.infinity,
              height: double.infinity,
              colorBlendMode: BlendMode.darken,
              color: Colors.black.withValues(alpha: 0.5),
            ),
          ),
          Center(
            child: Text(
              cityName,
              style: TextStyle(
                color: Colors.white,
                fontSize: 40,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Positioned(
            bottom: 10,
            right: 10,
            child: SizedBox(
              width: 30,
              height: 30,
              child: FloatingActionButton(
                backgroundColor: Colors.white,
                onPressed: null,
                child: const Icon(Icons.favorite, size: 15, color: Colors.red),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
