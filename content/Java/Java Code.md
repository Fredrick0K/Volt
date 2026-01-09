Aight twn, here you'll find some example code.

``` java
public boolean insertar(Ventas venta){
	boolean insertado = ventas.add(venta);
	if(insertado){
		venta.setTurismo(this);
	}
	return insertado.
}
```

## Closing Sessions.
``` java
package titanium;

public class Principal {

    private static void escribirMenu() {
		//Code for escribirMenu()...        
		System.out.println("0) - End program.");
		System.out.println("1) - <Action>.");
		System.out.println("2) - <Action>.");
		System.out.println("3) - <Action>.");	
    }
      public static void main(String[] args) {
        int opcion;
         do {
            escribirMenu();
            opcion = Teclado.leerEntero("Opcion: ");

            switch (opcion) {
                case 0:
                    System.out.println("Cya1!");
                   ------------------------------------------
                   | ObjectDBUtil.cerrarFabricaConexiones();| <- //Here close connections  
                   ------------------------------------------
                    break;
                case 1:
                //case 1 code...
                    break;
                case 2:
                //case 2 code...
                    break;
                case 3:
                //case 3 code...
                    break;
            }
        } while (opcion != 0);
    }
}
```

>[!note] As you can see, in ``case 0:`` is when the program ends, and there is where we need to add the command to close all sessions, if not, sessions will stay awake and consuming resources and maybe, crashing the whole program.


