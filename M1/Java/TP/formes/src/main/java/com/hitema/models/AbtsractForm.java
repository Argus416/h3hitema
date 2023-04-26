package com.hitema.models;

public abstract class AbtsractForm {

    private String implementation = "FRF" ;
    private String symbol = "*";
    private int number;

    public AbtsractForm() {
        this(5, "*");
    }

    public AbtsractForm(int number) {
        this(number, "*");
    }

    public AbtsractForm(int number, String symbol) {
        this.symbol = symbol;
        this.number = number;
    }

    public abstract String draw();
    public String getSymbol() {
        return symbol;
    }

    public int getNumber() {
        return number;
    }

    public String getImplementation() {
        return implementation;
    }
}
