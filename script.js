document.addEventListener('DOMContentLoaded', function(){
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
