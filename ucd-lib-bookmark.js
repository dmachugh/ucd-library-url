javascript:void(function () {
	var url = location.href;
	var parts = url.split('/');
	parts = parts.slice(2,parts.length);
	parts[0] = parts[0] + '.ucd.idm.oclc.org';
	var newUrl = 'http://' + parts.join('/');
	location = newUrl;
}());
