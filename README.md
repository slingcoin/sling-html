### sling-html5 wallet
========================

HTML5 interface for [Sling](http://www.slingcoin.io) [(github)](https://github.com/slingcoin).
To use it, clone this repo under ~/.sling/html like this:

    git clone https://github.com/slingcoin/sling-html ~/.sling/html
    
If you'r on **Mac OS X** - clone to ${HOME}/Library/Application\ Support/Sling /html instead of ~/.sling/html

Contribute
----------

Feel free to fork and send pull requests!

To make it easier for us to accept your patches, please follow the conventional GitHub workflow:

     # after forking, clone your repo
     rm -rf ~/.sling/html
     git clone git@github.com:yournickname/sling-html.git ~/.sling/html
     cd ~/.sling/html
     # CREATE A NEW BRANCH, specific to the fix you're implementing
     git checkout -b my-fix
     # ... make your changes ...
     # commit and push
     git commit -m "Fixing #1234 - bad foobarizer" && git push
     # Now open a pull request from branch my-fix to CryptoDJ:master on github.
     # Once the request is accepted, switch back to master and track upstream
     git remote add upstream https://github.com/CryptoDJ/sling-html.git # one-off setup
     git fetch upstream
     git checkout master
     git merge upstream/master # you should get a fast-forward message here
     git push

Translations
------------

If you want to add your own translation, edit `scripts/app.js` like this:
    }), a.useLocalStorage(), a.preferredLanguage("en")

1. fork the repo and create a new branch

        git clone git@github.com:yournickname/sling-html.git ~/.sling/html
        cd ~/.sling/html
        git checkout -b Klingon

2. add your language to the list of available choices. You should use your ISO code here,
it should match what the browser reports. The Klingon ISO is "klg", so:


        `var knownLanguages = ["en","nl","cz","fr","de","sk", "sp", "klg"];`
    
4. stage all changes in file `app.js` 

        git add app.js
        
5. commit & push


        git commit -m "Klingon translation"
        git push   
 
3. When opening the pull request on github. For any help, ping @cryptodj.


Market Categories:
------------------------


