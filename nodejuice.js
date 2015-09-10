// FILE: nodejuice.js
exports.sidekick = {
    host  : null, // Leave 'null' to listen on all hosts.
    port  : 8010, // access your server from this port.
    fetch : {     // point to your web server.
        host : 'localhost', // point to your web server.
        port : 8080 // point to your web server.
    }
};

exports.seeker = {
    host   : null, // Leave 'null' to listen on all hosts.
    port   : 8002,
    delay  : 200,   // milliseconds before page starts to reload.
                    // setting too low will cause apahce read file error.
    wait   : 1500,  // milliseconds before a new connection.
                    // setting this too low will make crazziness.
    add    : true,  // allow new file to push updates.
    remove : true,  // allow file delete to push updates.
    touch  : false, // allow file touch to push updates.
    access : false, // allow file reads to push updates.
    bits   : true,  // allow chmod/chown to push updates.
    save   : true,  // allow file save to push updates.
    dir    : true,  // allow directory changes to push updates.
    ignore : [ /git$/, /svn$/, /cvs$/, /swp$/, /~$/ ] // stuff to ignore.
};

exports.wsgi = {
    host  : null, // Leave 'null' to listen on all hosts.
    port  : 8080,
    root  : 'index.htm', // used for static content as the default.
    retry : { max: 4, wait: 120 }, // number of retries to load a file.
    url   : [ // interface between browser URL Request and Files.

        [/^\/app$/, '/app.js'], // run an application.
        [/^\/.*/, '/static/'],  // serve content from /static/ dir.
        [/^\/.*/, '/'] // server static content from root app dir.

    ]
};
