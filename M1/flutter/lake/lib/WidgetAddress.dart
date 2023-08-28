import 'package:flutter/material.dart';
import 'package:lake/WidgetFavorite.dart';

class WidgetAddress extends StatelessWidget{
  const WidgetAddress({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          margin: const EdgeInsets.all(20),
          child: (const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  // Aligns the Column's children to the start
                  children: [
                    Text(
                      'Lake campground',
                      style: TextStyle(fontWeight: FontWeight.w800),
                    ),
                    Text('wKandersteg, Switzerland',
                        style: TextStyle(color: Colors.grey)),
                  ],
                ),
                WidgetFavorite()
              ])),
        )
      ],
    );  }

}