function compute() {
	var T = document.getElementById("team").value;
	var R = document.getElementById("round").value;
	var B = document.getElementById("break").value;

	var a = [];
	var count=1,sum=0;
	var i=0,j=0;
	
	//cout<<"Enter number of teams"<<endl;
	//cin>>T;
	//cout<<"Enter number of rounds"<<endl;
	//cin>>R;
	
	//case 1
	
	//cout<<"CASE 1"<<endl;
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
	
	i=T-1;
	while((i>=0)&&(sum<=B))
	{
		count=1;
		
		while((a[i]==a[i-1])&&(sum<=B))
		{
			count++;
			i--;
			if((sum+count)>=B)
			break;
		}
		sum+=count;
		//cout<<count<<":"<<a[i]<<"Sum is...."<<sum<<endl;
		if(sum>=B)
		break;
		
		i--;
	}
	
	document.getElementById("result1").innerHTML = "Case : 1\n"+"All teams on "+(a[i]+1)+" points and higher break and "+count+" teams on "+a[i]+" will break";
        //cout<<"All teams on"<<a[i]+1<<"break"<<endl<<"and"<<count<<"teams on"<<a[i]<<"will break";
	
	//case 2
	i=0;j=0;
	//cout<<"CASE 2"<<endl;
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
	sum=0;
	i=T-1;
	while((i>=0)&&(sum<=B))
	{
		count = 1;
		while((a[i]==a[i-1])&&(sum<=B))
		{
			count++;
			i--;
			if((sum+count)>=B)
			break;
		}
		sum+=count;
		//cout<<count<<":"<<a[i]<<"Sum is...."<<sum<<endl;
		if(sum>=B)
		break;
		
		i--;
	}
	
	document.getElementById("result2").innerHTML = "Case : 2\n"+"All teams on "+(a[i]+1)+" points and higher break and "+count+" teams on "+a[i]+" will break";
	


}
