# User research with Chrome extensions

This is a template Chrome extension. It's a quick and easy way to modify pages for user research.

This example injects social sharing links onto guides and other pages on GOV.UK mainstream.

## Start with manifest.json

This file gets read first. As well as some basic information like a title and description, this is where you specify what domains to match (pre-populated with standard GOV.UK domains).

You can then specify css and js files which get added to the page. In this example I've added some CSS, added jQuery and then used js to inject an HTML element into certain pages. For some reason your injected HTML has to be on one line or it throws an error.

If you just want to inject css, you don't need the js.

## Workflow

* In chrome, visit [chrome://extensions](chrome://extensions)
* Click 'Developer mode' in the top right
* Click 'Load unpacked extension...'
* Open your extension
* You can now open/refresh the page you're modifying
* If you change your extension, you have to refresh the extensions page then the target page
* When you're done, you can package the extension using the 'Pack extension...' button
* You can run a packed extension just by dragging it into [chrome://extensions](chrome://extensions)