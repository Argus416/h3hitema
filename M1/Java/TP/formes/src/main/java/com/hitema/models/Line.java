package com.hitema.models;

import com.hitema.Shape;

/**
 * POJO : Represente un objet dessinant une ligne
 */
public class Line extends AbtsractForm implements Shape {

    public Line() {
        super();
    }

    public Line(int number) {


        super(number);
    }

    public Line(int number, String symbol) {
        super(number, symbol);
    }

    @Override
    public String  draw() {
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<getNumber();i++){
            sb.append(getSymbol()+" ");
        }
        sb.append("\n");
        return sb.toString();
    }

}
