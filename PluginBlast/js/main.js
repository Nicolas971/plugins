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
		'JBrowse/Plugin',
        'dijit/form/Button',
        'dijit/Toolbar',
        'JBrowse/Util',
        'JBrowse/has',
        'dojo/dom-construct'
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
		JBrowsePlugin,
        Button,
        Toolbar,
        Util,
        has,
        dom
	) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
        var browser = args.browser;
        // do anything you need to initialize your plugin here
        console.log( "PluginBlast plugin starting" );
        var args = args
        console.log(args);
        browser.afterMilestone('completely initialized', function(){})
        window.awesomeBlastHackAss = function() {
            console.log("toto")
            setTimeout(function(){
                document.querySelectorAll('.fastaView ').forEach(function(fastaView) {
                    //console.log(fastaView["firstElementChild"].id);
                    //var bartools = document.getElementById(fastaView["firstElementChild"].id);
                    //console.log(bartools);
                    //var string1 = "";
                    //console.log(fastaView["firstElementChild"].id)
                    // for(var property1 in fastaView){
                    //     console.log(property1);
                    //     console.log(fastaView[property1]);
                    //
                    // }
                    // for (var property1 in fastaView) {
                    //   string1 = string1 + fastaView[property1];
                    // }
                    //
                    // console.log(string1);
                    //console.log(this);
                    var buttonBlast = new Button(
                        {
                        iconClass: 'dijitIconSave',
                        label: "BLAST",
                        title: "send to BLAST",
                        onclick: function(){
                            console.log("ok")
                        }
                    });
                    //console.log(fastaView);

                    //console.log(this)
                    //bartools.addButtons(buttonBlast);
                    document.getElementById(fastaView["firstElementChild"].id).append(buttonBlast);
                    //fastaView.append(buttonBlast);
                });
            }, 500);

        }


    }
});
});
