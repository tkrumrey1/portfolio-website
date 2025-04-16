document.addEventListener('DOMContentLoaded', function(){
  // This script can be used for any JS interactions if you decide to add more later.
  var dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseover', function(){
      var dropdownContent = this.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = 'block';
      }
    });
    dropdown.addEventListener('mouseout', function(){
      var dropdownContent = this.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = 'none';
      }
    });
  });
});
