package com.hitema;

import java.util.List;

public class ShapeServer {
    public static void drawMultiple(List<Shape> shapes){
        for(Shape s : shapes){
            System.out.println("Type Implementation :"+s.getImplementation()+" Model Version :");
            System.out.println(s.draw());
        }
    }
}
