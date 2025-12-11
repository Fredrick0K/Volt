Ai twn, here you'll find some example code.

public boolean insertar(Ventas venta){
boolean insertado = ventas.add(venta);
if(insertado){
venta.setTurismo(this);
}
return insertado.
}