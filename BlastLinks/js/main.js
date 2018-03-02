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
                //console.log(args);
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

                    browser.renderGlobalMenu( 'Links', {text: 'Ressources'}, browser.menuBar );
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
            if(this.canSaveFiles){
                var toolbar = new toolbar().placeAt(container);
                var thisB = this;
                toolbar.addChild(new Button(
                    {
                        iconClass: 'dijitIconSave',
                        label: 'BLAST',
                        title: 'save as Blast',
                        disabled: ! has('save-generated-files'),
                        onClick: function() {
                            thisB.track._fileDownload(
                                { format: 'FASTA',
                                  filename: Util.assembleLocString(region)+'.fasta',
                                  data: text
                        });
                    }
                }));
            }
		}});
    }
);

//var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);
