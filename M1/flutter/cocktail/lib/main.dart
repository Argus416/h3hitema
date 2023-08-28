import 'package:flutter/material.dart';
import 'services/ApiTheCocktailDb.dart';

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
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'The Cocktail DB'),
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
  List _drinks = [];
  int _totalDrinks = 0;
  final ApiTheCocktailDb _apiTheCocktailDb = ApiTheCocktailDb();

  @override
  void initState() {
    super.initState();
    fetchAllDrinks(); // Call the method to fetch the data when the widget initializes
  }

  Future<void> fetchAllDrinks() async {
    try {
      List drinksNonAlcoholic = await _apiTheCocktailDb.getAllNonAlcoholic();
      List drinksAlcoholic = await _apiTheCocktailDb.getAllAlcoholic();
      List allDrinks = [...drinksNonAlcoholic, ...drinksAlcoholic];

      setState(() {
        _drinks = allDrinks;
        _totalDrinks = allDrinks.length;
      });
    } catch (e) {
      // Handle any error that occurs during the API call
      print('Error fetching alcoholic drinks: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.secondary,
        title: Text(widget.title),
      ),
      body: Column(
        children: [
          Text(_totalDrinks.toString()),
          Expanded(
              child: SizedBox(
            height: 200.0,
            child: ListView.builder(
              itemCount: _drinks.length,
              itemBuilder: (BuildContext context, int index) {
                Map<String, dynamic> drink = _drinks[index];
                return ListTile(
                  title: Text(drink['strDrink']),
                  subtitle: Text(drink['idDrink']),
                );
              },
            ),
          ))
        ],
      ),
    );
  }
}
