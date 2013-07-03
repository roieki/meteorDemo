== Meteor Demo ==

This is a learning exercise for Meteor JS, does nothing of use, and may disappear someday.
Meteor is a NodeJS full stack framework for rapid development of reactive single page web apps.

* git clone https://github.com/bingalls/meteorDemo
* Install Meteor: http://docs.meteor.com/#quickstart
* npm install -g meteorite
** Meteorite adds 3rd party packages to meteor, otherwise a drop-in replacement
* mrt add bootstrap
* mrt add router
* mrt add accounts-ui-bootstrap-dropdown
* mrt add accounts-password

optional:
* mrt add coffeescript

Now run `meteor` and open your browser to http://localhost:3000/

I've disabled the files in the root directory, that are generated by the
`meteor create` scaffolding command. You can uncompress them with `xz -d *.xz`
xz is free software bundled with Linux, and is available with 7zip, on other platforms.
