import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class WidgetButtons extends StatelessWidget{

  const WidgetButtons({super.key});

  void clickBtn (String text){
    print(text);
  }

  @override
  Widget build(BuildContext context) {

    final List<Map<String, dynamic>> btnIcons = [
      {'text': 'Call', 'icon': Icons.phone},
      {'text': 'Share', 'icon': Icons.share},
      {'text': 'Find us', 'icon': Icons.map},
    ];

    return Container(
      margin: const EdgeInsets.only(left: 20, right: 20, top: 10, bottom: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          for (var btnIcon in btnIcons)
            Column(
              children: [
                Icon(btnIcon['icon'], color: Colors.blue),
                TextButton(
                  style: ButtonStyle(
                    foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
                  ),
                  onPressed: () => clickBtn(btnIcon['text']),
                  child: Text(btnIcon['text']),
                )
              ],
            ),
        ],
      ),
    );
  }

}