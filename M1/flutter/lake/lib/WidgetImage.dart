import 'package:flutter/cupertino.dart';

class WidgetImage extends StatelessWidget{
  const WidgetImage({super.key});

  @override
  Widget build(BuildContext context) {
    String imgUrl =
        "https://images.pexels.com/photos/11816677/pexels-photo-11816677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    return Container(
      decoration: BoxDecoration(
            image:
            DecorationImage(
              image: NetworkImage(imgUrl), fit: BoxFit.cover
            )
          ),
      child: const AspectRatio(
        aspectRatio: 3 / 2,
      ),
    );
  }
}
