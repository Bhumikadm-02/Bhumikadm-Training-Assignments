

	//Creating an array of integer with name ‘arr[10]’

	class ListofNumbers{
	  public int[] arr = new int[10];
	  public void writeList()
	{
	  try 
	    {
	       arr[10]= 11;
	}
	catch(NumberFormatException e1){
	System.out.println("Number Format Exeption =>" + e1.getMessage());
	}
	catch(IndexOutOfBoundsException e2)
	{
	   System.out.println("Index Out of Bounds Exeption=>" + e2.getMessage());
	   }
	 }
	}

	class exception  {
	 public static void main(String[] args){
	   ListofNumbers list = new ListofNumbers();
	 list.writeList();
	 }
	}

