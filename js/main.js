var size=prompt("enter size of array");
var arr=[];
var result=[];
var temp=0;
document.write("size of array:"+size+"<br>");
for(i=0;i<size;i++)
{
	 arr[i]=parseInt(prompt("enter the array value"));
}
document.write("The array values are:&nbsp;"+arr+"<br>");
for(i=0;i<arr.length;i++)
{
	for(j=i+1;j<arr.length;j++)
	{
		if(arr[i]>arr[j])
		{
			temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
		}
	}
	result.push(arr[i]);
}
document.write("Descending order of:&nbsp;"+result+"<br>");
document.write("3rd Smallest number in an array:&nbsp;"+result[2]);