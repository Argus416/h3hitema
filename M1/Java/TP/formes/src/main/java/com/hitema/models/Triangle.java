package com.hitema.models;

import com.hitema.Shape;

public class Triangle extends AbtsractForm implements Shape {

    public Triangle(int number) {
        super(number);
    }

    public Triangle(int number, String symbol) {
        super(number, symbol);
    }

    @Override
    public String draw() {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < getNumber(); i++) {
            for (int j = 0; j <= i; j++) {
                if(
                        i == 0 ||
                        i == getNumber() - 1 ||
                        j == 0 ||
                        j == i
                ){
                    sb.append(getSymbol()+" ");

                }else{
                    sb.append("  ");
                }            }
            sb.append("\n");
        }
        return sb.toString();
    }
}
