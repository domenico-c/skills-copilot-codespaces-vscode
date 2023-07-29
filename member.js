function skillsMemners () {
  return {
    restrict: 'E',
    templateUrl: 'app/components/members/skills-members.html',
    scope: {
      members: '=',
      skills: '=',
      selected: '=',
      onSelected: '&'
    },
    controller: function ($scope) {
      $scope.onMemberSelected = function (member) {
        $scope.onSelected({member: member});
      };
    }
  };
}