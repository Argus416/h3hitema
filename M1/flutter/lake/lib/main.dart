import 'package:flutter/material.dart';
import 'package:lake/WidgetAddress.dart';
import 'package:lake/WidgetButtons.dart';
import 'package:lake/WidgetDescription.dart';
import 'package:lake/WidgetImage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String imgUrl =
      "https://images.pexels.com/photos/11816677/pexels-photo-11816677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
        resizeToAvoidBottomInset: false,
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Text(widget.title),
        ),
        body: ListView(children: const [
          WidgetImage(),
          WidgetAddress(),
          WidgetButtons(),
          WidgetDescription()
        ]));
  }
}
