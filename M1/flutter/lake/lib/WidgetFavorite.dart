import 'package:flutter/material.dart';

class WidgetFavorite extends StatefulWidget {
  const WidgetFavorite({super.key});

  @override
  State<StatefulWidget> createState() => _WidgetFavoriteState();
}

class _WidgetFavoriteState extends State<WidgetFavorite> {
  bool _isFavorite = false;

  void toggleFavorite() {
    setState(() {
      _isFavorite = !_isFavorite;
    });
  }

  @override
  Widget build(BuildContext context) {
    return TextButton(
        onPressed: toggleFavorite,
        child: Row(
          children: [
            Icon(_isFavorite ? Icons.star : Icons.star_border, color: Colors.blue),
            Text(_isFavorite ? '1' : '0')
          ],
        ));

    //return  Row(
    //  children: [Icon(Icons.star, color: Colors.blue), Text(isFavorite.toString())],
    //);
  }
}
