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
        color: Colors.grey[500]?.withValues(alpha: 0.4),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          if (icon != null) Icon(icon, color: iconColor, size: 15),
          icon != null ? SizedBox(width: 5) : SizedBox(width: 0),
          Text(label, style: TextStyle(color: Colors.white)),
        ],
      ),
    );
  }
}
