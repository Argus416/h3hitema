import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';



class FavoriteWidget extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Container(
      child: TextButton(
        child: Text('Click me'),
        onPressed: () {
          print('Pressed');
        },
      ),,
    )
  }

}