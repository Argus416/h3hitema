import 'dart:convert';

import 'package:http/http.dart' as http;

class ApiTheCocktailDb {
  String apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";
  http.Client client = http.Client();

  Future getCocktail(String id) async {
    try {

      final response = await client.get(Uri.parse("$apiUrl/lookup.php?i=$id"));
      if (response.statusCode == 200) {
        return json.decode(response.body)['drinks'];
      } else {
        throw Exception('Something went wrong ${response.statusCode}');
      }
    } catch (e) {
      throw('Error fetching alcoholic drinks : $e');
    }
  }

  Future getAllAlcoholic() async {
    try {
      final response = await client.get(Uri.parse("$apiUrl/filter.php?a=Alcoholic"));
      if (response.statusCode == 200) {
        return json.decode(response.body)['drinks'];
      } else {
        throw Exception('Something went wrong ${response.statusCode}');
      }
    } catch (e) {
      throw('Error fetching alcoholic drinks : $e');
    }
  }

  Future getAllNonAlcoholic() async {
    try {
      final response = await client.get(Uri.parse("$apiUrl/filter.php?a=Non_Alcoholic"));
      if (response.statusCode == 200) {
        return json.decode(response.body)['drinks'];
      } else {
        throw Exception('Something went wrong ${response.statusCode}');
      }
    } catch (e) {
      throw('Error fetching alcoholic drinks : $e');
    }
  }
}