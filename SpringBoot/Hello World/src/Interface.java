//Demo interface program
import java.util.Scanner;

//public class Interface {
	interface FirstInterface {
		  public void myMethod(); // interface method
		}

		interface SecondInterface {
		  public void myOtherMethod(); // interface method
		}

		// DemoClass "implements" FirstInterface and SecondInterface

		class DemoClass implements FirstInterface, SecondInterface {
		  public void myMethod() {
			  String a;
			Scanner sc = new Scanner(System.in);
		    System.out.println("Enter 1st name: ");
		    a = sc.nextLine();
		    System.out.println(a);
		  }
		  public void myOtherMethod() {
			  String b;
			  Scanner sc = new Scanner(System.in);
			    System.out.println("Enter 2nd name: ");
			    b = sc.nextLine();
			    System.out.println(b);
		  }
		}
		

		class Interface {
		  public static void main(String[] args) {
		    DemoClass myObj = new DemoClass();
		    myObj.myMethod();
		    myObj.myOtherMethod();
		  }
		}

//}
