 const menuItem = {
   id: "speak-it",
   title: "SpeakIt",
   contexts: ["selection"]
 };

 chrome.contextMenus.create(menuItem);

 chrome.contextMenus.onClicked.addListener((clickData) => {
   if (clickData.menuItemId === 'speak-it' && clickData.selectionText){
     chrome.tts.speak(clickData.selectionText, {'lang': 'en-US','rate': 1});
   }
 });
