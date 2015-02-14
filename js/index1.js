function compute() {
	var T = document.getElementById("team").value;
	var R = document.getElementById("round").value;
	var B = document.getElementById("break").value;

	var a = [];
	var count=1,sum=0;
	var i=0,j=0;

	while(i<T)
	{
		a[i]=0;
		i++;
	}

	for(i=0;i<R;i++)
	{
		for(j=0;j<T;j=j+4)
		{
			a[j+1]++;
			a[j+2]=a[j+2]+2;
			a[j+3]=a[j+3]+3;
		}
		
		a.sort(function(a, b){return a-b});
		
	}

    var prevVal = T-1;
    var curVal = T-1;
    var curCount = 1;
    var totCount = 1;
    var notFound = 1;
    var i = T-2;
    
    if(B==1)
        document.getElementById("result1").innerHTML = "All teams greater than "+a[curVal]+" break";
    else if(B==0)
        document.getElementById("result1").innerHTML = "No teams break";
    else if(B==T)
        document.getElementById("result1").innerHTML = "All teams break";
    else
    {
        while((i>=0) && (notFound))
        {
            curVal = i;
            if(a[prevVal]==a[curVal])
                curCount++;
            else
                curCount = 1;
            totCount++;
            if(totCount==B)
                notFound = 0;
            prevVal = curVal;
            i--;
        }
        document.getElementById("result1").innerHTML = "Case 1 : All teams on "+a[prevVal+curCount]+" points and higher break and "+curCount+" teams on "+a[curVal]+" points will break";
    }

i=0,j=0;
while(i<T)
	{
		a[i]=0;
		i++;
	}

	
	for(i=0;i<R;i++)
	{
		for(j=0;j<T;j=j+4)
		{	
			a[j]=a[j]+3;
			a[j+1]=a[j+1]+2;
			a[j+2]=a[j+2]+1;
		}
		
		
		a.sort(function(a, b){return a-b});
	}

    prevVal = T-1;
    curVal = T-1;
    curCount = 1;
    totCount = 1;
    notFound = 1;
    i = T-2;
    
    if(B==1)
        document.getElementById("result2").innerHTML = "All teams greater than "+a[curVal]+" break";
    else if(B==0)
        document.getElementById("result2").innerHTML = "No teams break";
    else if(B==T)
        document.getElementById("result2").innerHTML = "All teams break";
    else
    {
        while((i>=0) && (notFound))
        {
            curVal = i;
            if(a[prevVal]==a[curVal])
                curCount++;
            else
                curCount = 1;
            totCount++;
            if(totCount==B)
                notFound = 0;
            prevVal = curVal;
            i--;
        }
        document.getElementById("result2").innerHTML = "Case 2 : All teams on "+a[prevVal+curCount]+" points and higher break and "+curCount+" teams on "+a[curVal]+" points will break";
    }

}
