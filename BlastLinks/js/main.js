define(
	[
		'dojo/request',
		'dojo/cookie',
		'dojo/_base/declare',
		'dojo/_base/lang',
		'dijit/form/Button',
        'dijit/Menu',
        'dijit/MenuItem',
        'dijit/MenuSeparator',
        'dijit/CheckedMenuItem',
        'dijit/PopupMenuItem',
        'dijit/form/DropDownButton',
        'dijit/DropDownMenu',
		'JBrowse/View/InfoDialog',
		'JBrowse/Plugin'
	],
	function(
		request,
		cookie,
		declare,
		lang,
		dijitButton,
        dijitMenu,
        dijitMenuItem,
        dijitMenuSeparator,
        dijitCheckedMenuItem,
        dijitPopupMenuItem,
        dijitDropDownButton,
        dijitDropDownMenu,
		InfoDialog,
		JBrowsePlugin
	){
	return declare(JBrowsePlugin,  {
		constructor: function( args ) {
			var browser = this.browser;
			var thisB = this;
			this.args = args;
			browser.afterMilestone('completely initialized', function(){
				console.log('BlastLinks plugin starting');
					// Initialize the data into a datastructure which we'll access later.
                    var button = browser.addGlobalMenuItem('Links',
                        new dijitMenuItem({
						    label: "Blast amaizing",
                            id: "buttonlinks",
						    onClick: function(event){
                                window.open("https://urgi.versailles.inra.fr/blast_amaizing");
                            }
					}));
                    //button.domNode.className += " buttonlinks"
                    //button.domNode.style.float = 'left'

                    browser.renderGlobalMenu( 'Links', {text: 'Links'}, browser.menuBar );
					//browser.menuBar.appendChild(button.domNode);
			});
            var linksURGI = new dijitMenuItem(
                {
                    label: "URGI",
                    onClick: function(event) {
                        window.open('https://urgi.versailles.inra.fr/')
                    }
                }
            );
            browser.addGlobalMenuItem('Links', linksURGI);
            // var toolsMenu = dijit.
            // var helpMenu = dijit.get('dropdownbutton_help');
            // domConstruct.place(toolsMenu.domNode,helpMenu.domNode,'before');
            // this.searchMenuInitialized = true;
			}
        });
    }
);
