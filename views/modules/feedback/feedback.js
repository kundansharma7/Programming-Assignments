angular.module('feedbackApp', [])
  .controller('feedbackCtrl', ['$scope', 'httpService', function($scope, httpService) {
    $scope.uploads = [];
    $scope.fileupload = "";
    $scope.name = "";
    $scope.description = "";
    $scope.fileupload = "";

    $scope.responseData = undefined;
    $scope.onGlobalSuccess = function (response) {
      console.log('AppCtrl.onSuccess', response);
      $scope.responseData = response.data;
      $scope.uploads = $scope.uploads.concat(response.data.files);
      $scope.fileupload = $scope.uploads.join();
    };
    $scope.resetFields = function() {
      $scope.uploads = [];
    }
    $scope.submitForm = function() {
      if(!$scope.name || $scope.name == "" || $scope.name === undefined) {
        alert("Please select name");
        return false;
      } else if(!$scope.description || $scope.description == "" || $scope.description === undefined) {
        alert("Please select description");
        return false;
      } else if(!$scope.fileupload || $scope.fileupload == "" || $scope.fileupload === undefined) {
        alert("Please upload file");
        return false;
      }
      var postDat = {
        name: $scope.name,
        description: $scope.description,
        files: $scope.fileupload
      }
      httpService.post('feedback', postDat, {'Content-Type': 'application/json'}, "")
        .then(function(success) {
          alert("Your request has been submitted!")
        }).catch(function(err) {
          console.log("Error::", err);
        });
    }
  }]);