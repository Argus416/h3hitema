import 'package:flutter/cupertino.dart';

class WidgetDescription extends StatelessWidget{
  const WidgetDescription({super.key});


  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.only(left: 20, right: 20, top: 10, bottom: 10),
        child: const Text(
            "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimeri ",
            textAlign: TextAlign.justify));  }

}