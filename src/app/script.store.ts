interface Scripts {
  name: string;
  src: string;
}  
export const ScriptStore: Scripts[] = [
  {name: 'jquery', src: 'assets/js/lib/jquery/jquery.min.js'},
  {name: 'tether', src: 'assets/js/lib/tether/tether.min.js'},
  {name: 'bootstrap', src: 'assets/js/lib/bootstrap/bootstrap.min.js'},
  {name: 'jquery-ui', src: 'assets/js/lib/jqueryui/jquery-ui.min.js'},
  {name: 'lobipanel', src: 'assets/js/lib/lobipanel/lobipanel.min.js'},
  {name: 'jquery-matchHeight', src: 'assets/js/lib/match-height/jquery.matchHeight.min.js'},
  {name: 'chart-loader', src: 'https://www.gstatic.com/charts/loader.js'},


  {name: 'plugins', src: 'assets/js/plugins.js'},
  {name: 'app', src: 'assets/js/app.js'}
];