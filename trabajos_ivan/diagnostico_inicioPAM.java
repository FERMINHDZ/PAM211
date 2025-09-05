import java.util.ArrayList;
import java.util.Scanner;

// Clase ReglamentoPOO
class ReglamentoPOO {
    ArrayList<String> reglas;

    public ReglamentoPOO() {
        reglas = new ArrayList<>();
        reglas.add("Respeto");
        reglas.add("Importante participacion activa en orden.");
        reglas.add("no entregar trabajos incompletos.");
        reglas.add("No se aplican examenes fuera de tiempo.");
        reglas.add("plagio de trabajos = 0 para todos .");
        reglas.add("3 faltas = final del parcial.");
        reglas.add("calificacion maxima del final es 8.");
    }

    public void mostrarInformacion() {
        System.out.println("=== Reglamento POO ===");
        for (int i = 0; i < reglas.size(); i++) {
            System.out.println((i + 1) + ". " + reglas.get(i));
        }
        System.out.println("-----------------------------");
    }
}

// Clase LineamientosClassroom
class LineamientosClassroom {
    ArrayList<String> descripciones;

    public LineamientosClassroom() {
        descripciones = new ArrayList<>();
        descripciones.add("Entrega los trabajos para su revision.");
        descripciones.add("Entregas en pdf");
        descripciones.add("Avisos en clase.");
        descripciones.add("Entregas autorizadas con retraso .5 calif max.");
    }

    public void mostrarInformacion() {
        System.out.println("=== Lineamientos Classroom ===");
        for (String linea : descripciones) {
            System.out.println("- " + linea);
        }
        System.out.println("-----------------------------");
    }
}

// Clase FechasdeParciales
class FechasdeParciales {
    ArrayList<String> fechas;

    public FechasdeParciales() {
        fechas = new ArrayList<>();
        fechas.add("Parcial 1: 29/09/2025");
        fechas.add("Parcial 2: 3/11/2025");
        fechas.add("Parcial 3: 1/12/2025");
        fechas.add("Examen Final: 8/12/2025");
    }

    public void mostrarInformacion() {
        System.out.println("=== Fechas de Parciales ===");
        for (String f : fechas) {
            System.out.println(f);
        }
        System.out.println("-----------------------------");
    }
}

// Clase PorcentajesporParcial
class PorcentajesporParcial {
    ArrayList<String> porcentajes;

    public PorcentajesporParcial() {
        porcentajes = new ArrayList<>();

        // Septiembre
        porcentajes.add("Septiembre : Conocimiento 40%, Desempeño 20%, Producto 30%, Proyecto 10%");
        // Octubre
        porcentajes.add("Octubre : Conocimiento 40%, Desempeño 20%, Producto 20%, Proyecto 20%");
        // Noviembre
        porcentajes.add("Noviembre : Conocimiento 20%, Desempeño 10%, Producto 40%, Proyecto 30%");
    }

    public void mostrarInformacion() {
        System.out.println("=== Porcentajes por Parcial ===");
        for (String p : porcentajes) {
            System.out.println(p);
        }
        System.out.println("-----------------------------");
    }
}

// Clase principal
public class diagnostico_inicioPAM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ReglamentoPOO reglamento = new ReglamentoPOO();
        LineamientosClassroom lineamientos = new LineamientosClassroom();
        FechasdeParciales fechas = new FechasdeParciales();
        PorcentajesporParcial porcentajes = new PorcentajesporParcial();

        int opcion;
        do {
            System.out.println("=== MENÚ DE CONSULTA ===");
            System.out.println("1. Reglamento POO");
            System.out.println("2. Lineamientos Classroom");
            System.out.println("3. Fechas de Parciales");
            System.out.println("4. Porcentajes por Parcial");
            System.out.println("0. Salir");
            System.out.print("Elige una opción: ");
            opcion = sc.nextInt();

            switch (opcion) {
                case 1:
                    reglamento.mostrarInformacion();
                    break;
                case 2:
                    lineamientos.mostrarInformacion();
                    break;
                case 3:
                    fechas.mostrarInformacion();
                    break;
                case 4:
                    porcentajes.mostrarInformacion();
                    break;
                case 0:
                    System.out.println("Saliendo del programa...");
                    break;
                default:
                    System.out.println("Opción no válida. Intenta de nuevo.");
            }

        } while (opcion != 0);

        sc.close();
    }
}
