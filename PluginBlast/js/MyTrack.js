define( ["dojo/_base/declare", "JBrowse/View/Track/CanvasFeatures"],
   function(declare,CanvasFeatures) {
   return declare(CanvasFeatures, {
       _trackMenuOptions: function() {
           var opts=this.inherited(arguments); //call the parent classes function
           opts.push( // add an extra menu item to the array returned from parent class function
               {
                   label: "Custom item",
                   type: 'dijit/CheckedMenuItem',
                   onClick: function(event) {
                       console.log(opts);
                   },
                   iconClass: "dijitIconPackage"
               }
           );
           return opts;
       }
   });
   }
);
