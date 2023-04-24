package com.hitema;

import java.util.Scanner;

public class Form {
    public static void main(String[] args) {
        System.out.println("Programme de génération de formes!");

        Scanner scanner = new Scanner(System.in);
        System.out.println("Combient de hashtag vous voulez afficher? ");
        String nbLineString = scanner.nextLine();
        int nbLine;

        if(!nbLineString.isEmpty()){
            nbLine = Integer.parseInt(nbLineString);
            formOne(nbLine);
            formTwo(nbLine);
            formThree(nbLine);
        }else{
            System.out.println("Aucun chiffre n'a été saisi");
        }
    }

    public static void line(int number, String sign){
        String line = sign.repeat(number);
        System.out.println(line);
    }

    public static void formOne(int number){
        System.out.println("Form one");
        line(number, "+ ");
        System.out.println(' ');
    }

    public static void formTwo(int number){
        System.out.println("Form two");
        for (int i = 0; i < number; i++){
            line(number, "# ");
        }
        System.out.println(' ');
    }

    public static void formThree(int number){
        System.out.println("Form three");
        for (int i = 1; i <= number; i++){
            line(i, "= ");
        }
        System.out.println(' ');
    }
}