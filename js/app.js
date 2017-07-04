(function (angular) {
	'use strict'; //严格模式，避免直接创建全局变量的产生

	// Your starting point. Enjoy the ride!

	//1.创建模块
	var app=angular.module('todosApp',[])

	//2.创建控制器
	app.controller('todosController',['$scope',function($scope){

		//功能1,任务的展示（ng-repate）
		//假设已经得到了数据
		$scope.todos=[
			{id:1,name:'吃饭',complted:true},
			{id:2,name:'睡觉',complted:true},
			{id:3,name:'打豆豆',complted:false},
			{id:4,name:'学习',complted:true},
			{id:5,name:'喝水',complted:false},
		]

		//功能2.添加任务
		$scope.newTodo="" //ng-model 双向数据绑定
		$scope.add=function(){
			//判断newTodo是否为空，为空则不添加任务
			if(!$scope.newTodo){
				return;
			}
			//把新任务添加到$scope,todos中去
			$scope.todos.push({
				id:Math.random(),
				name:$scope.newTodo,
				completed:false
			})
			//添加完了，制空
			$scope.newTodo=""
		}

		//功能3.删除任务
		$scope.remove=function(id){
			//根据id到数组中$scope.todos中查找相应的元素，并删除
			for(var i=0; i<$scope.todos.length; i++){
				var item=$scope.todos[i]
				if(item.id===id){
					$scope.todos.splice(i,1)//删除当前元素
					 return;
				}
			}
		}

		//功能4.修改内容
           $scope.isEditingId=-1
		   $scope.edit=function(id){
              $scope.isEditingId=id
		   }
		   //只是改变文本框的编辑状态
		   $scope.save=function () {
			   $scope.isEditingId=-1
		   }

		   //功能5.切换任务的状态

		//功能6.批量切换任务状态

		$scope.selectAll=false;
		   $scope.toggleAll=function(){
		   	//让$scope.todos中所有的数据complted的值等于$scope.selectAll
			   for(var i=0; i<$scope.todos.length; i++){
			   	var item=$scope.todos[i]
				   item.completed=$scope.selectAll
			   }
		   }

		   //功能7.显示未完成任务数
		$scope.getActive=function () {
			//遍历$scope.todos
			var count=0
         for(var i=0; i<$scope.todos.length; i++){
				var item=$scope.todos[i]
			 if(!item.completed){
					count++;
			 }
		 }
		 return count;
		}

		//功能8.清除已完成的任务
       $scope.clearAll=function(){
		   	//遍历数组$scope.todos数组，
		   for(var  i=$scope.todos.length-1; i>=0; i--){

		   	 var item=$scope.todos[i]
			   if(item.completed){
		   	 	$scope.todos.splice(i,1)
			   }
		   }
	   }
	}])


})(angular);
