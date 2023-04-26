package com.hitema;

import com.hitema.models.Line;
import com.hitema.models.Square;
import com.hitema.models.Triangle;

import java.util.Scanner;

public class Formes {

    private static String symbol="*";
    public static void main(String[] args) {

        String line = "=".repeat(100);
        System.out.println(line);
        System.out.println("Programme de génération de Formes");
        System.out.println(line);
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("Entrez un nombre entier :");
            String rep = scanner.nextLine();
            if ( rep.equals(""))
                break;
            var number = Integer.valueOf(rep);
            System.out.println("====Ligne====");
            Line l  = new Line(number);
            l.draw();

            System.out.println("");
            System.out.println("====Carré====");
            Square square = new Square(number);
            System.out.println(square.draw());

            Triangle triangle = new Triangle(number);
            System.out.println(triangle.draw());

        }
        System.out.println("Fin du programme des formes");
    }
}