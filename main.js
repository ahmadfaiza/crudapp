var crudApp = angular.module("crudApp",[]);  

crudApp.controller("crudController",function($scope){

$scope.records = [

];

$scope.delete = function(){
var index = this.$index;
$scope.records.splice(index,1);


}

$scope.read = function(){
    var index = this.$index;
    $scope.records.$watch(index,1);
    
    
    }


$scope.create = function(){
$scope.records.push({
    "blog_id": $scope.data.blog_id,
    "blog_title": $scope.data.blog_title,
    "blog_content": $scope.data.blog_content,
    "added_at_date": $scope.data.added_at_date
});

$scope.data.blog_id="";
$scope.data.blog_title="";
$scope.data.blog_content="";
$scope.data.added_at_date="";
}

$scope.edit = function(){
    $scope.x = {"display":"block"};
    var index = this.$index; 
    $scope.edit.index=index;
    $scope.edit.update_blog_id=$scope.records[index].blog_id;
$scope.edit.blog_title=$scope.records[index].blog_title;
$scope.edit.blog_content=$scope.records[index].blog_content;
$scope.edit.added_at_date=$scope.records[index].added_at_date;

}

$scope.updateUser = function(){
    var index = $scope.edit.index;

    $scope.records[index]={
        "blog_id": $scope.edit.update_blog_id,
        "blog_title": $scope.edit.blog_title,
        "blog_content": $scope.edit.blog_content,
        "added_at_date": $scope.edit.added_at_date
    };
   
};

});