angular.module('portfolio').controller('ModalCtrl', function ($uibModal, $log, $document, $scope) {
  var $ctrl = this;  
  $ctrl.open = function (size, desc, fundo, texto) {
    $ctrl.desc = desc;
    $ctrl.fundo = fundo;
    $ctrl.texto = texto;
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: undefined,
      resolve: {
        desc: function () {
          return $ctrl.desc;
        },
        fundo: function (){
          return $ctrl.fundo;
        },
        texto: function () {
          return $ctrl.texto;
        }
      }
    });
  };

});


angular.module('portfolio').controller('ModalInstanceCtrl', function ($uibModalInstance, desc, fundo, texto) {
  var $ctrl = this;
  $ctrl.desc = desc;
  $ctrl.fundo = fundo;
  $ctrl.texto = texto;
  $ctrl.ok = function () {
    $uibModalInstance.close();
  };
});