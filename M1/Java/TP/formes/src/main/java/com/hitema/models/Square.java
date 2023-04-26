package com.hitema.models;

import com.hitema.Shape;

public class Square extends AbtsractForm implements Shape {

    public Square(int number) {
        super(number);
    }

    public Square(int number, String symbol) {
        super(number, symbol);
    }

    @Override
    public String draw() {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i< getNumber(); i++){
            for(int j = 0; j< getNumber(); j++) {
                if(
                        i == 0 ||
                        i == getNumber() - 1 ||
                        j == 0 ||
                        j == getNumber() - 1
                ){
                    sb.append(getSymbol()+" ");
                }else{
                    sb.append("  ");
                }
            }
            sb.append("\n");
        }
        return sb.toString();
    }

}
