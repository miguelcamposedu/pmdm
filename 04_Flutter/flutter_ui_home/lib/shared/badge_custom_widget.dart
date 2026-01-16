import 'package:flutter/material.dart';

class BadgeCustomWidget extends StatelessWidget {
  final double width;
  final String label;
  final IconData? icon;
  final Color? iconColor;

  const BadgeCustomWidget({
    super.key,
    required this.width,
    required this.label,
    this.icon,
    this.iconColor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      decoration: BoxDecoration(
        color: Colors.grey,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          if (icon != null) Icon(icon, color: iconColor),
          Text(label),
        ],
      ),
    );
  }
}
