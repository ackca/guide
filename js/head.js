var head = `
    <link rel='stylesheet' type='text/css' href='rootpath/css/bootstrap.min.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/font-awesome.min.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/sidebar-menu.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/ai.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/guide-icon.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/config.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/HLTable.css'>
    <script type='text/javascript' src='rootpath/js/jquery.min.js'></script>
    <script type='text/javascript' src='rootpath/js/config.js'></script>
    <script type='text/javascript' src='tree.js'></script>
    <script type='text/javascript' src='rootpath/js/top_menu.js'></script>
    <script type='text/javascript' src='rootpath/js/HLTable.js'></script>
`;

// uri：/guide/class/nmap/nmap.html
var uri = window.location.href.substring(window.location.href.indexOf('/guide'));
// length -1 获取 uri 中 / 数量，再 -2 即相对根路径级数
var path_num = uri.split('/').length - 1 - 2;

document.write(head.replace(/rootpath\//g, '../'.repeat(path_num)));
