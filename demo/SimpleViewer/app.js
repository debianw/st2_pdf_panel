Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        'Ext.ux': '../../ux'
    }
});

Ext.application({

    name  : 'app',
    views : [
        'Ext.ux.panel.PDF'
    ],
    launch: function() {
        
        Ext.Viewport.add({
            xtype     : 'pdfpanel',
            fullscreen: true,
            layout    : 'fit',
            src       : 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf', // URL to the PDF - Same Domain or Server with CORS Support
            style     : {
                backgroundColor: '#333'
            }
        });
    }
});