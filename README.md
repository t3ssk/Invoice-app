# O této web app
Jde o ukázku webové aplikace spravující faktury. Vystavěná je pomocí typescriptu, reactu, hooks, reduxu a (s)css modules. Forms jsou vytvořeny za pomoci formiku, validace je přes Yup. 
App se dá taky přepnout do darkmode. 

## Překážky, výzvy a rozhodnutí
Projekt jsem se rozhodla psát pomocí typescriptu, abych si procvičila budování aplikace s použitím typů. 
Data jsou přístupná jen lokálně, pracuju s reduxem pro state management a data ukládám do localStorage. Rozhodla jsem se tak proto, že jde jen o ukázku, ne o komplexní web app. Nevytvářela jsem authentikační sekci a kdyby mi každý mohl mazat z databáze data, mohlo by se stát, že by ji další návštěvník našel prázdnou. 

Zvažovala jsem také, jestli odesílat data na firebase, ale nakonec jsem se rozhodla to neudělat. Data jsou sice validovaná pomocí formilk, i tak bych ale nezabránila tomu, aby se na web dostala data, která by byla viditelná každému. Proto jsou změny ukládány jen do localStorage. 

Největší výzvou pro mě byl komplexní formulář a jeho validace. Poprvé jsem pracovala víc do hloubky s Formikem a menší výzvou pak bylo, že vytváří nejen novou ivoice, ale taky edituje už existující. 

Pokud se chcete podívat, jak používám firebase praktičtěji než pouze k fetchování úvodních dat, můžete se podívat na můj projekt 
Crowdfund. [Repo](https://github.com/t3ssk/CrowdfundingReactProject) a [demo](https://t3ssk.github.io/CrowdfundingReactProject/) jsou tady. 

## Credits: 
Prototyp je ze stránky [fontendmentor](http://frontendmentor.io)