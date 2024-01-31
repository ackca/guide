var head = `
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/bootstrap.min.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/font-awesome.min.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/sidebar-menu.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/top_menu.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/guide-icon.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/config.css'>
    <link rel='stylesheet' type='text/css' href='rootpath/css/public/HLTable.css'>
    <script type='text/javascript' src='rootpath/js/public/jquery.min.js'></script>
    <script type='text/javascript' src='rootpath/js/public/config.js'></script>
    <script type='text/javascript' src='tree.js'></script>
    <script type='text/javascript' src='rootpath/js/public/top_menu_words.js'></script>
`;

// uri：/guide/class/nmap/nmap.html
var uri = window.location.href.substring(window.location.href.indexOf('/guide'));
// length -1 获取 uri 中 / 数量，再 -2 即相对根路径级数
var path_num = uri.split('/').length - 1 - 2;

document.write(head.replace(/rootpath\//g, '../'.repeat(path_num)));
