window.onload=( function() {
var link = document.createElement('link');
        link.rel = 'stylesheet';
       link.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
        link.crossOrigin="anonymous";
       document.head.appendChild(link);

var widget = document.getElementsByClassName("productView-options");
var model = '<!-- Button trigger modal -->'+
'<!-- Modal -->'+
'<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">'+
  '<div class="modal-dialog">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
       ' <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>'+
       ' <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
      '</div>'+
     ' <div class="modal-body">'+
      'Store1 <br>'+
      'Store2 <br>'+
      'Store3 <br>'+
      'Store4 <br>'+
      'Store5'+
      '</div>'+
      '<div class="modal-footer">'+
     '   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'+
    '    <button type="button" class="btn btn-primary">Understood</button>'+
   '   </div>'+
  '  </div>'+
 ' </div>'+
'</div>'

widget[0].innerHTML = widget[0].innerHTML + 
			'<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">'+
  'BOPIS'+
'</button>'+model;


    });
