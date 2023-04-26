package com.hitema;

import com.hitema.models.Line;
import com.hitema.models.Square;
import com.hitema.models.Triangle;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ConsoleForms {

    private static String symbol="*";
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        String line = "=".repeat(100);
        System.out.println(line);
        System.out.println("Programme de génération de ConsoleForms");
        System.out.println(line);
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("Entrez un nombre entier :");
            String rep = scanner.nextLine();
            if ( rep.equals(""))
                break;
            var number = Integer.valueOf(rep);
            System.out.println("====Ligne====");
            Shape l  = new Line(number);
            shapes.add(l);
            //System.out.println(l2.draw());

            //System.out.println(l.draw());
            System.out.println("====Carré====");
            Shape square = new Square(number);
            shapes.add(square);
            //System.out.println(square.draw());
            System.out.println("====Triangle====");
            Shape triangle = new Triangle(number);
            // System.out.println(triangle.draw());
            shapes.add(triangle);
            ShapeServer.drawMultiple(shapes);
        }
        System.out.println("Fin du programme des formes");
    }

}