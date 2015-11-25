function eliminateDuplicates(arr) {
   var i,
	  len = arr.length,
	  out = [],
	  obj = {};
   for (i = 0; i < len; ++i) {
	  obj[arr[i]] = 0;
   }
   for (i in obj) {
	  out.push(i);
   }
   return out;
}

function purge() {
	var a = [];
	var b = [];

	var index;
	var pola = ["pole1", "pole2", "pole3", "pole4", "pole5", "pole6", "pole7", "pole8", "pole9", "pole10"];
	for (index = 0; index < pola.length; index++) {
	   a[index] = document.getElementById(pola[index]).value;
	}

	b = eliminateDuplicates(a);

	for (index = 0; index < pola.length; index++) {
	   if (typeof b[index] !== 'undefined') {
		  document.getElementById(pola[index]).value = b[index];
	   } else {
		  document.getElementById(pola[index]).value = null;
	   }
	}
}
