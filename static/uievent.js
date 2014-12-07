	myApp.controller('uievent', ['$scope', function($scope) {

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//																		Ajout Raph
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	/*$scope.filters=[
		{name:'a', description:'a'},
		{name:'b', description:'b'},
		{name:'c', description:'c'}
	];*/
	//$scope.filterChains=[];
	/*$scope.filterChains=[
		{name:'FC1', doc:'abc'},
		{name:'FC2', doc:'abc'},
		{name:'FC3', doc:'abc'},
		{name:'FC4', doc:'abc'},
		{name:'FC5', doc:'abc'}
	];*/
	
	/*$scope.executions=[
		{
			name:'Execution 1',
			filterChain:{
				name:'Filter chain 1',
				filters:[
					{name:'filter 1',executionCode:'blablaba',workingCopy:'blablabla',language:'c',feed:'images/d.png',params:[
						{name:'Group 1',type:'group',value:[
							{name:'Param 1',type:'text',value:'1'},
							{name:'Param 2',type:'text',value:'2'},
							{name:'Param 3',type:'text',value:'3'}
						]},
						{name:'Group 2',type:'group',value:[
							{name:'Param 1',type:'text',value:'1'},
							{name:'Param 2',type:'text',value:'2'}
						]},
						{name:'Param 1',type:'text',value:'1'}
					]},
					{name:'filter 2',executionCode:'blablaba',workingCopy:'blablabla',language:'c',feed:'images/d.png',params:[
						{name:'Group 1',type:'group',value:[
							{name:'Param 1',type:'text',value:'1'},
							{name:'Param 2',type:'text',value:'2'}
						]},
						{name:'Param 1',type:'text',value:'1'}
					]},
					{name:'filter 3',executionCode:'blablaba',workingCopy:'blablabla',language:'c',feed:'images/d.png',params:[
						{name:'Group 1',type:'group',value:[
							{name:'Param 1',type:'text',value:'1'},
							{name:'Param 2',type:'text',value:'2'},
							{name:'Param 3',type:'text',value:'3'}
						]},
						{name:'Param 1',type:'text',value:'1'}
					]}
				]}
		},
		{
			name:'Execution 2',
			filterChain:{
				name:'Filter chain 2',
				filters:[
					{name:'filter 1',executionCode:'blablaba',workingCopy:'blablabla',language:'c',feed:'images/d.png',params:[
						{name:'Group 1',type:'group',value:[
							{name:'Param 1',type:'text',value:'1'},
							{name:'Param 2',type:'text',value:'2'}
						]},
						{name:'Param 1',type:'text',value:'1'}
					]},
					{name:'filter 2',executionCode:'blablaba',workingCopy:'blablabla',language:'c',feed:'images/d.png',params:[
						{name:'Group 1',type:'group',value:[
							{name:'Param 1',type:'text',value:'1'},
							{name:'Param 2',type:'text',value:'2'},
							{name:'Param 3',type:'text',value:'3'}
						]},
						{name:'Param 1',type:'text',value:'1'}
					]}
				]}
		},
	];*/
	
  	$scope.onDropComplete=function(data,ind,evt){
		if(!isNaN(data)){
			oldInd = data;
			data = $scope.executions[$scope.activeExecution].filterChain.filters[oldInd];
			$scope.executions[$scope.activeExecution].filterChain.filters.splice(oldInd,1);
			if(ind > oldInd) ind--;	//-1 because we removed an element from the array
		}
		if(ind < 0 || ind == '-1')
			$scope.executions[$scope.activeExecution].filterChain.filters.push(data);
		else
			$scope.executions[$scope.activeExecution].filterChain.filters.splice(ind,0,data);
		//$scope.apply();
	};
	
	$scope.removeFilter=function(ind){
		if( confirm("Are you sure you want to remove this filter from the chain ?") ){
			$scope.executions[$scope.activeExecution].filterChain.filters.splice(ind,1);
			//$scope.apply();
		}
	};
	
	$scope.changeOrder=function(oldInd,newInd){
		if(newInd == $scope.executions[$scope.activeExecution].filterChain.filters.length) newInd = 0;	//Moving last to first
		data = $scope.executions[$scope.activeExecution].filterChain.filters[oldInd];
		$scope.executions[$scope.activeExecution].filterChain.filters.splice(oldInd,1);
		
		if(newInd < 0 || newInd == '-1')
			$scope.executions[$scope.activeExecution].filterChain.filters.push(data);
		else
			$scope.executions[$scope.activeExecution].filterChain.filters.splice(newInd,0,data);
	};
	
	$scope.changeSelectedFilter=function(ind){
		($scope.selectedFilter==ind) ? $scope.selectedFilter=-1 : $scope.selectedFilter=ind;
	};
	
	$scope.changeSelectedFilterChain=function(ind){
		($scope.selectedFilterChain==ind) ? $scope.selectedFilterChain=-1 : $scope.selectedFilterChain=ind;
	};
	
	$scope.videoClick=function(filterInd){
		if($scope.executions[$scope.activeExecution].filterChain.filters[filterInd].feed == 'images/d.png')
			$scope.executions[$scope.activeExecution].filterChain.filters[filterInd].feed = 'images/u.png';
		else
			$scope.executions[$scope.activeExecution].filterChain.filters[filterInd].feed = 'images/d.png';
	};
	
	$scope.changeExecution = function(execInd){
		$scope.displayOpenChain = false;
		$scope.displayEditTitle = false;
		$scope.activeExecution = execInd;
	};
	
	$scope.addExecution = function(){
		var newNbExec = $scope.executions.length + 1;
		$scope.executions.push({name:'Execution '+newNbExec});
	};
	
	$scope.newFilterChain = function(){
		delete $scope.executions[$scope.activeExecution].filterChain;
		$scope.executions[$scope.activeExecution].filterChain = {filters:[]};
		$scope.displayEditTitle = true;
	};
	
	$scope.openFilterChain = function(data){
		if($scope.selectedFilterChain < 0){
			alert("Please select a filter chain.");
		}else{
			//open
			delete $scope.executions[$scope.activeExecution].filterChain;
			$scope.executions[$scope.activeExecution].filterChain = data;
			$scope.toggleOpenChain();
		}
	};
	
	$scope.toggleOpenChain = function(){
		$scope.selectedFilterChain = -1;
		$scope.displayOpenChain = !$scope.displayOpenChain;
	};

	$scope.toggleEditTitle = function(save){

		var exec = $scope.executions[$scope.activeExecution];
		
		if(save && $scope.displayEditTitle) {  
			var filters = [];
			for(fname in exec.filterChain.filters) {
				filters.push(exec.filterChain.filters[fname].name);
			}
			$scope.modify_filterchain(
				exec.filterChain.name, 
				exec.filterChain.newname, 
				filters,
				exec.filterChain.media,
				$scope.modify_filterchain_cb);
			$scope.stop_filterchain_execution(exec.name, $scope.stop_filterchain_execution_cb);
			$scope.start_filterchain_execution(exec.name, exec.media_name, exec.filterChain.newname, exec.file_name, $scope.start_filterchain_execution_cb);
				
			exec.filterChain.name = exec.filterChain.newname;
			delete exec.filterChain.newname;
		} else {
			exec.filterChain.newname = exec.filterChain.name;
		}
		
		$scope.displayEditTitle = !$scope.displayEditTitle;
	}

}]);
